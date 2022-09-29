import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class QuizLogicService {
  quiz_data: Question[] = [
    {
      question: 'a',
      explanation: 'b',
      selection: [
        {
          id: 1,
          sentence: 'c',
          is_correct: false,
          sort_num: 1,
        },
        {
          id: 2,
          sentence: 'd',
          is_correct: true,
          sort_num: 2,
        },
        {
          id: 3,
          sentence: 'e',
          is_correct: false,
          sort_num: 3,
        },
        {
          id: 4,
          sentence: 'f',
          is_correct: false,
          sort_num: 4,
        },
      ],
      order: 1,
    },
    {
      question: 'a2',
      explanation: 'b2',
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
      order: 2,
    },
  ];

  // 出題する問題を格納する変数
  private _quizzes: Question[] = [];
  // 出題数、正答数、総出題数、総正答数
  private _questionCount: number = 0;
  private _answerCount: number = 0;
  private _totalQuestions: number = 0;
  private _totalAnswers: number = 0;
  // クイズを実行中かどうかのフラグ値
  private _isQuizzing: boolean = false;
  // 回答後に正否確認をするかどうかのフラグ値
  private _isConfirmAnswer: boolean = false;

  constructor(private router: Router) {}

  // homeのngOnInitから実行される
  // 出題する問題やカウントの初期化、フラグの初期化
  initQuiz(): void {
    this._quizzes = [];
    this._questionCount = 0;
    this._answerCount = 0;
    this._isQuizzing = false;
    // ローカルストレージから過去の総出題数、総正答数を取得
    const storedResult = localStorage.getItem('question-total-result') ?? false;
    if (storedResult) {
      const parsedResult = JSON.parse(storedResult);
      this._totalQuestions = parsedResult.totalQuestions ?? 0;
      this._totalAnswers = parsedResult.totalAnswers ?? 0;
    }
  }

  // homeの「クイズスタート」ボタンから実行される
  // これから出題する問題の取得、出題数、正答数を初期化
  startQuiz(isConfirmAnswer: boolean) {
    // const quizCollection = this.firestore.collection<Quiz>('quizzes');
    // quizCollection.valueChanges().subscribe((quizzes) => {
    //   this._quizzes = _.sampleSize(quizzes, QUIZ_COUNT);
    //   this._questionCount = 1;
    //   this._answerCount = 0;
    //   this._isQuizzing = true;
    //   this._isConfirmAnswer = isConfirmAnswer;
    //   this.router.navigate(['quiz']);
    // });

    this._quizzes = this.quiz_data;
    this._questionCount = 1;
    this._answerCount = 0;
    this._isQuizzing = true;
    this._isConfirmAnswer = isConfirmAnswer;
    this.router.navigate(['quiz']);
  }

  getQuiz(): Question {
    return this._quizzes[this.questionCount - 1];
  }

  // 上記で宣言したprivateな変数のgetter
  get questionCount(): number {
    return this._questionCount;
  }
  get answerCount(): number {
    return this._answerCount;
  }
  get isQuizzing(): boolean {
    return this._isQuizzing;
  }
  get isConfirmAnswer(): boolean {
    return this._isConfirmAnswer;
  }
  get totalQuestions(): number {
    return this._totalQuestions;
  }
  get totalAnswers(): number {
    return this._totalAnswers;
  }
}
