import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/types';
import { MatDialog } from '@angular/material/dialog';
import { QrDialogComponent } from '../../components/qr-dialog/qr-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  previewQuestions: string[] = [
    "私の好きな音楽ジャンルは？",
    "私の飼っているペットは？",
    "私の特技は？"
  ]

  openDialog(): void {
    const dialogRef = this.dialog.open(QrDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
