import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient,
  ) { }

  deleteQuestion(questionId : number){
    return this.http.delete<Question>("http://localhost:1337/Questions/" + questionId);
  }

  registerQuiz(question: Question){
    return this.http.post<Question>("http://localhost:1337/Questions/", question);
  }
}
