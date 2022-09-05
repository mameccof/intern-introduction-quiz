import { Component, OnInit } from '@angular/core';
import { Profile, User } from 'src/app/types/types';
import { MatDialog } from '@angular/material/dialog';
import { QrDialogComponent } from '../../components/qr-dialog/qr-dialog.component';
import { UserService } from '../../services/user.service';

interface quiz{
  question:string
  explanation:string
  selection: {
    sentence:string
    is_correct:boolean
    sort_num:number
  }[]
}[]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  previewQuestions: any[] = []
  loginUser!: User

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      user =>{

        localStorage.setItem('loginUser', user.id.toString());
        this.loginUser = user
        if(this.loginUser.icon_url === undefined){
          this.loginUser.icon_url = "https://material.angular.io/assets/img/examples/shiba2.jpg"
        }
        this.previewQuestions = this.loginUser.questions

      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QrDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
