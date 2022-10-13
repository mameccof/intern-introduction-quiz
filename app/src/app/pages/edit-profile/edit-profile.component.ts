import { Component, Input, OnInit } from '@angular/core';
import { User, PROFILE } from 'src/app/types/types';
import { MatDialog } from '@angular/material/dialog';
import { IconDialogComponent } from 'src/app/components/icon-dialog/icon-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  profile: User = PROFILE;
  userId: number = 0;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('loginUserId')!);
    this.userService.getUser(this.userId).subscribe((user) => {
      this.profile = user;
      this.profile.icon_url =
        'https://material.angular.io/assets/img/examples/shiba2.jpg';
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(IconDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  updateProfile() {
    this.userService
      .putUser(this.profile, this.userId)
      .subscribe((updateInfo) => {
        console.log(updateInfo);
        this.router.navigate(['/home']);
      });
  }
}
