import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../types/types';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root',
})
export class QuizLogicService {
  quiz_data: Question[] = [
    {
      id: 0,
      question: 'この作業をしているのは何時だ',
      explanation: '眠れないよ；；',
      selection: [
        {
          id: 1,
          sentence: '１７時',
          is_correct: false,
          sort_num: 1,
        },
        {
          id: 2,
          sentence: '２０時',
          is_correct: false,
          sort_num: 2,
        },
        {
          id: 3,
          sentence: '２３時',
          is_correct: false,
          sort_num: 3,
        },
        {
          id: 4,
          sentence: '１時',
          is_correct: true,
          sort_num: 4,
        },
      ],
      order: 2,
    },
    {
      id: 1,
      question: '私が腹筋３０回にかかる秒数は',
      explanation: '（自社調べ）',
      selection: [
        {
          id: 5,
          sentence: 'c2',
          is_correct: false,
          sort_num: 1,
        },
        {
          id: 6,
          sentence: 'd2',
          is_correct: true,
          sort_num: 2,
        },
        {
          id: 7,
          sentence: 'e2',
          is_correct: false,
          sort_num: 3,
        },
        {
          id: 8,
          sentence: 'f2',
          is_correct: false,
          sort_num: 4,
        },
      ],
      order: 1,
    },
    {
      id: 2,
      question: 'aaaaa',
      explanation: '（自社調べ）',
      selection: [
        {
          id: 5,
          sentence: 'c2',
          is_correct: false,
          sort_num: 1,
        },
        {
          id: 6,
          sentence: 'd2',
          is_correct: true,
          sort_num: 2,
        },
        {
          id: 7,
          sentence: 'e2',
          is_correct: false,
          sort_num: 3,
        },
        {
          id: 8,
          sentence: 'f2',
          is_correct: false,
          sort_num: 4,
        },
      ],
      order: 1,
    },
  ];

  // 出題する問題を格納する変数
  private _quizzes: Question[] = [];
  // 出題数、正答数
  private _questionCount: number = 0;
  private _correctCount: number = 0;

  // クイズを実行中かどうかのフラグ値
  private _isQuizzing: boolean = false;

  constructor(private router: Router, private quizService: QuizService) {}

  // homeのngOnInitから実行される
  // 出題する問題やカウントの初期化、フラグの初期化
  initQuiz(): void {
    this._quizzes = [];
    this._questionCount = 0;
    this._correctCount = 0;
    this._isQuizzing = false;
  }

  // homeの「クイズスタート」ボタンから実行される
  // これから出題する問題の取得、出題数、正答数を初期化
  startQuiz() {
    this.quizService.getQuizzes(4).subscribe((data) => {
      this._quizzes = data;
      this._questionCount = 1;
      this._correctCount = 0;
      this._isQuizzing = true;
      this.router.navigate(['quiz']);
    });

    // this._quizzes = this.quiz_data;
  }

  getQuiz(): Question {
    return this._quizzes[this.questionCount - 1];
  }

  countAnswer(isCorrect: boolean): void {
    if (isCorrect) ++this._correctCount;
    ++this._questionCount;
  }

  nextPage(): void {
    if (this.questionCount <= this._quizzes.length) {
      this.router.navigate(['quiz']);
    } else {
      this.router.navigate(['result']);
    }
  }

  // 上記で宣言したprivateな変数のgetter
  get questionCount(): number {
    return this._questionCount;
  }
  get correctCount(): number {
    return this._correctCount;
  }
  get isQuizzing(): boolean {
    return this._isQuizzing;
  }
  // get isConfirmAnswer(): boolean {
  //   return this._isConfirmAnswer;
  // }
  // get totalQuestions(): number {
  //   return this._totalQuestions;
  // }
  // get totalAnswers(): number {
  //   return this._totalAnswers;
  // }
}
