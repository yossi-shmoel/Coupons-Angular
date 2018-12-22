import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const userId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    this.usersService.Get(userId).subscribe(c => this.user = c);
  }

  private sendForm(): void {
    this.usersService.CreateOrUpdate(this.user).subscribe();
  }

}
