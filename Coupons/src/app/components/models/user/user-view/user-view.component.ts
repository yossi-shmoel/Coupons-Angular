import { User } from './../../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  users: User[] = [];
  user: User;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const couponId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    if (couponId === 0) {
      this.userService.GetAll().subscribe(c => this.users = c);
    } else {
      this.userService.Get(couponId).subscribe(c => {
        this.user = c;
        this.users.push(new User(this.user.Name, this.user.Email, this.user.Type, this.user.CompanyId));
      });
    }
  }

}
