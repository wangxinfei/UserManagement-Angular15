import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

// const ELEMENT_DATA: User[] = [
//   {id: 1, name: 'Caroline Smiths', username: 'Cara', email: 'cara@example.com'},
// ];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];
  //dataSource = ELEMENT_DATA;
  
  listUsers: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }
}
