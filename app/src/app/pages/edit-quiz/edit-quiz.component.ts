import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  selections: string[] = ['クラシック', 'K-POP', 'J-POP', 'ブルース'];

  quiz: Question = {
    question: "nakamura nakamura san",
    explanation: "kaisetu",
    selection: [
      {
        sentence: "aaaa",
        is_correct: false,
        sort_num: 1,
      },
      {
        sentence: "bbbb",
        is_correct: false,
        sort_num: 2,
      },
      {
        sentence: "cccc",
        is_correct: true,
        sort_num: 3,
      },
      {
        sentence: "eeee",
        is_correct: false,
        sort_num: 4,
      }
    ],
    order: 1,
    user: 7,
  }

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
  }

  registerQuiz(){
    this.quizService.registerQuiz(this.quiz).subscribe( q => {
      console.log(q);
    })
  }

}
