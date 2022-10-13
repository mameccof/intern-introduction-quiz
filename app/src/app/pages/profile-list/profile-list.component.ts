import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent implements OnInit {
  profileList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getFollowing(parseInt(localStorage.getItem('loginUserId')!))
      .subscribe((myFollowing) => {
        this.profileList = myFollowing;
      });
  }
}
