import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isHide: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginInfo = {
    mailadress: '',
    password: '',
  };

  onBtnLogin() {
    this.userService
      .login(this.loginInfo.mailadress, this.loginInfo.password)
      .subscribe((loginUser) => {
        this.userService.loginUser = loginUser.user;
        console.log(loginUser);
        this.router.navigate(['/home']);
      });
  }
}
