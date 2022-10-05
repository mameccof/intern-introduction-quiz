import { Component, OnInit } from '@angular/core';
import { User, PROFILE } from 'src/app/types/types';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  profile: User = PROFILE;
}
