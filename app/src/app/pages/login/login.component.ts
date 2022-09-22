import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isHide: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onBtnLogin() {
    this.userService
      .login('macdsvfgnil@example.com', 'passworddesuyo')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
