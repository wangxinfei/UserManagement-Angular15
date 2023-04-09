import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  addUserForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone':new FormControl('')
    })
  }

  createUser(){
    this.userService.addUser(this.addUserForm.value).subscribe(data =>{
      this._snackBar.open("User created successfully");
      console.log("User Created");
      }, err => {
      this._snackBar.open("Unable to create user");
      console.log(err);
    })
  }
}
