import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  user = {
    mailadress: '',
    password: '',
    user_name: '',
    birth_date: '',
    birth_place: '',
    affilition: '',
  };

  registerUser(): void {
    // this.userService.addUser(this.user).subscribe(() => {
    //   console.log("bbb");
    //   })
    this.userService
      .registerUser(this.user.mailadress, this.user.password)
      .subscribe((response) => {
        // this.router.navigate(['/home']);
        console.log(response);
      });
  }
}
