import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent {
  userId: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.userId = data['id'];
    });

    if(this.userId) {
      this.userService.deleteUser(this.userId).subscribe(data => {
        this._snackBar.open("User deleted successfully");
        console.log("User Deleted");
      }, err => {
        this._snackBar.open("Unable to delete user");
        console.log(err);
      });
    }
  }

  createUser(){
  }
}
