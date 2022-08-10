import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
})
export class QrDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QrDialogComponent>,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
