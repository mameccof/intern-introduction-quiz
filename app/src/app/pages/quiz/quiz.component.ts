import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizLogicService } from 'src/app/services/quiz-logic.service';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(
    private quizLogicService: QuizLogicService,
    private router: Router
  ) {}

  quiz?: Question;
  questionCount?: number;
  selectedSelection?: number;

  ngOnInit(): void {
    if (this.quizLogicService.isQuizzing) {
      this.quiz = this.quizLogicService.getQuiz();
      this.questionCount = this.quizLogicService.questionCount;
    } else {
      this.router.navigate(['home']);
    }
  }

  onSelect(selection: number): void {
    this.selectedSelection = selection;
  }

  //TODO 選択していない状態で遷移できないようにする
  sendAnswer() {
    this.router.navigate(['explanation/' + this.selectedSelection]);
  }
}
