import { User } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-viewer',
  templateUrl: './users-viewer.component.html',
  styleUrls: ['./users-viewer.component.css']
})
export class UsersViewerComponent implements OnInit {

  public users: User[];
  public user: User;

  constructor(public userService: UsersService) {

  }


  ngOnInit() {
    this.userService.GetAllUsers().subscribe(users => this.users = users);
  }

}
