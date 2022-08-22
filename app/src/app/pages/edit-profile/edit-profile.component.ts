import { Component, OnInit } from '@angular/core';
import { Profile, User } from 'src/app/types/types';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IconDialogComponent } from'src/app/components/icon-dialog/icon-dialog.component';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profile: User =
  {
    user_name:"吉田新",
    birth_date:"2002/05/07",
    birth_place:"福島県",
    affilition:"国際情報工科自動車大学校",
    icon_url:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    mailadress:"",
    questions:[],
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(IconDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
