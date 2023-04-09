import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  
  listUsers: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }
}
