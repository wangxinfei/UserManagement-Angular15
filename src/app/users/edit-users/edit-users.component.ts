import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {

  userId: string = '';
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data =>{
      this.userId = data['id'];
    });

    if(this.userId !== '') {
      this.userService.deleteUser(this.userId).
      toPromise().
      then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);

        //Build the edit form
        this.editUserForm = this.formBuilder.group({
          'name': new FormControl(this.userDetails.name),
          'username': new FormControl(this.userDetails.username),
          'email': new FormControl(this.userDetails.email),
          'phone':new FormControl(this.userDetails.phone),
          'address.street': new FormControl(this.userDetails.address)
        })

        this.dataLoaded = true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  updateUser() {
    console.log(this.editUserForm.value);
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data =>{
      this._snackBar.open("User updated successfully");
      console.log("User Updated");
      }, err => {
      this._snackBar.open("Unable to update user");
      console.log(err);
    })
  }
}
