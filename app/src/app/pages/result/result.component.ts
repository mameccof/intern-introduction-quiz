import { Component, OnInit } from '@angular/core';
import { QuizLogicService } from 'src/app/services/quiz-logic.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  constructor(private quizLogic: QuizLogicService) {}

  correctNum: number = 0;

  ngOnInit(): void {
    this.correctNum = this.quizLogic.correctCount;
  }
}
