import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/types';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profile: Profile =
  {
    name:"吉田新",
    birth_date:"2002/05/07",
    birth_place:"福島県",
    affilition:"国際情報工科自動車大学校",
    icon_url:"https://material.angular.io/assets/img/examples/shiba2.jpg"
  }

}
