import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../types/types';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root',
})
export class QuizLogicService {
  // 出題する問題を格納する変数
  private _quizzes: Question[] = [];
  // 出題数、正答数
  private _questionCount: number = 0;
  private _correctCount: number = 0;

  //出題者名
  private _questioner: string = '';

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
  startQuiz(userId: number) {
    this.quizService.getQuizzes(userId).subscribe((data) => {
      this._quizzes = data;
      this._questionCount = 1;
      this._correctCount = 0;
      this._isQuizzing = true;
      this.router.navigate(['quiz']);
    });
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
  get questioner(): string {
    return this._questioner;
  }
  set questioner(name: string) {
    this._questioner = name;
  }
}
