import { User } from './../../../../models/user';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user = new User(null, null, null, null);

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  private sendForm(): void {
    this.usersService.CreateOrUpdate(this.user).subscribe();
  }
}
