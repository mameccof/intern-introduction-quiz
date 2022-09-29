import { Component, OnInit } from '@angular/core';
import { QuizLogicService } from 'src/app/services/quiz-logic.service';
import { User, PROFILE } from 'src/app/types/types';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private quizLogicService: QuizLogicService) {}

  ngOnInit(): void {
    this.quizLogicService.initQuiz();
  }

  startQuiz(isConfirmAnswer: boolean) {
    this.quizLogicService.startQuiz(isConfirmAnswer);
  }

  profile: User = PROFILE;
}
