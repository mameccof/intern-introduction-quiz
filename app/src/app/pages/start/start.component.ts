import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizLogicService } from 'src/app/services/quiz-logic.service';
import { UserService } from 'src/app/services/user.service';
import { User, PROFILE } from 'src/app/types/types';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(
    private quizLogicService: QuizLogicService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  profile: User = PROFILE;
  loginUser: User = PROFILE;
  loginId: number = parseInt(localStorage.getItem('loginUserId') ?? '0');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.quizLogicService.initQuiz();

    this.userService.getUser(id).subscribe((userRes) => {
      this.profile = userRes;
      this.userService.getUser(this.loginId).subscribe((loginUserRes) => {
        this.loginUser = loginUserRes;
        this.loginUser.following?.push(id!);
        this.userService
          .putUser(this.loginUser, this.loginId)
          .subscribe((user) => {
            console.log(user);
          });
      });
    });
  }

  startQuiz() {
    this.quizLogicService.questioner = this.profile.profile_name;
    this.quizLogicService.startQuiz(this.profile.id);
  }
}
