import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
})
export class QrDialogComponent implements OnInit {
  startURL: string = `${environment.FRONT_URL}/start/${localStorage.getItem(
    'loginUserId'
  )}`;

  constructor(public dialogRef: MatDialogRef<QrDialogComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
