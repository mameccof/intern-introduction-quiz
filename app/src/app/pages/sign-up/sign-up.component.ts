import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService: UserService,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  isHide = true;

  user = {
    mailadress: '',
    password: '',
    user_name: '',
    birth_date: '',
    birth_place: '',
    affilition : '',
  }

  registerUser(): void{

    this.userService.addUser(this.user).subscribe(() => {
      console.log("bbb");
      })
  }

}
