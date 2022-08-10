import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/types';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  @Input() profile?:Profile;
  @Input() isEditProfile?:boolean;

  ngOnInit(): void {
  }

}
