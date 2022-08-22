import { Component, OnInit } from '@angular/core';
import { Profile, User } from 'src/app/types/types';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  profileList: User[] = [
    {
      user_name:"吉田新",
      birth_date:"2002/05/07",
      birth_place:"福島県",
      affilition:"国際情報工科自動車大学校",
      icon_url:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      mailadress:"",
      questions:[],
    },
    {
      user_name:"厚海幸之介",
      birth_date:"2002/07/03",
      birth_place:"福島県",
      affilition:"国際情報工科自動車大学校",
      icon_url:"https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
      mailadress:"",
      questions:[],
    },
    {
      user_name:"西條智捷",
      birth_date:"1836/01/03",
      birth_place:"福島県",
      affilition:"国際情報工科自動車大学校",
      icon_url:"https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      mailadress:"",
      questions:[],
    },
    {
      user_name:"須藤将也",
      birth_date:"2002/12/15",
      birth_place:"福島県",
      affilition:"国際情報工科自動車大学校",
      icon_url:"https://cdn.discordapp.com/attachments/994847016523939900/1004143146202038342/IMG_1419.jpg",
      mailadress:"",
      questions:[],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
