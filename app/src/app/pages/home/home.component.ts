import { Component, OnInit } from '@angular/core';
import { Question, User } from 'src/app/types/types';
import { MatDialog } from '@angular/material/dialog';
import { QrDialogComponent } from '../../components/qr-dialog/qr-dialog.component';
import { UserService } from '../../services/user.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sortedMyQuestions: Question[] = [];
  loginUser!: User;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      localStorage.setItem('loginUser', user.id.toString());

      this.loginUser = user;
      if (this.loginUser.icon_url === undefined) {
        this.loginUser.icon_url =
          'https://material.angular.io/assets/img/examples/shiba2.jpg';
      }

      //データベースから取得したデータはorder順になっていないので、orderの昇順になるようにソート
      const sortedQuizzes = this.loginUser.questions.sort(function (
        first,
        second
      ) {
        return first.order - second.order;
      });

      this.sortedMyQuestions = sortedQuizzes;

      localStorage.setItem(
        'question_num',
        this.sortedMyQuestions.length.toString()
      );

      //問題を削除した時にイベントを渡すと、リロードの関係でうまくいってるのかよくわからないので
      //問題削除 > リロード > homeの読み込み >  ngOnInit() > updateOrder() 問題が削除された時にorderがずれることを対策
      this.updateOrder();
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

  //ドロップリストをいじると、その中に入っていた配列の添字も一緒に変更されていた。
  //上から順番にorderを割り振ればリストの問題とorderを同期させることができる
  updateOrder() {
    for (let i = 1; i <= this.sortedMyQuestions.length; i++) {
      this.sortedMyQuestions[i - 1].order = i;
      this.quizService
        .putQuiz(
          this.sortedMyQuestions[i - 1],
          this.sortedMyQuestions[i - 1].id
        )
        .subscribe();
    }
  }
}
