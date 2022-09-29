import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizLogicService } from 'src/app/services/quiz-logic.service';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
})
export class ExplanationComponent implements OnInit {
  quiz?: Question;
  correctAnswer: string = '';
  isCorrect: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private quizLogicService: QuizLogicService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quiz = this.quizLogicService.getQuiz();
    console.log(this.quiz);
    for (let s of this.quiz.selection) {
      if (s.is_correct) {
        this.correctAnswer = s.sentence;
      }
      if (s.id === id) {
        this.isCorrect = s.is_correct;
      }
    }
  }
}
