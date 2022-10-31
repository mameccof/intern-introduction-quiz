import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-scanner-dialog',
  templateUrl: './scanner-dialog.component.html',
  styleUrls: ['./scanner-dialog.component.scss'],
})
export class ScannerDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ScannerDialogComponent>) {}

  ngOnInit(): void {}
}
