import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/types/types';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  isHide = true;

  user: any = {
    email: '',
    username: '',
    password: '',
    profile_name: '',
    birth_date: '',
    birth_place: '',
    affilition: '',
    id: 0,
    icon_url: '',
    questions: [],
  };

  registerUser(): void {
    // this.userService.addUser(this.user).subscribe(() => {
    //   console.log("bbb");
    //   })
    this.user.username = this.user.email;
    this.userService.registerUser(this.user).subscribe((response) => {
      localStorage.setItem('jwt', response.jwt);
      console.log(response.user.id);
      localStorage.setItem('loginUserId', response.user.id.toString());
      console.log(response);

      this.router.navigate(['/home']);
      console.log(response);
    });
  }
}
