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

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.quizLogicService.initQuiz();
    this.userService.getUser(id).subscribe((user) => {
      this.profile = user;
    });
  }

  startQuiz() {
    this.quizLogicService.startQuiz(this.profile.id);
  }
}
