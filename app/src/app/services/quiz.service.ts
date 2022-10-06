import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../types/types';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  deleteQuestion(questionId: number) {
    return this.http.delete<Question>(
      'http://localhost:1337/Questions/' + questionId
    );
  }

  postQuiz(question: Question) {
    return this.http.post<Question>(
      'http://localhost:1337/Questions/',
      question
    );
  }

  getQuiz(id: number): Observable<Question> {
    return this.http.get<Question>('http://localhost:1337/Questions/' + id);
  }

  getTemplate() {
    return this.http.get<Question>(
      'http://localhost:1337/Template-questions/random/'
    );
  }

  putQuiz(question: Question, questionId: number) {
    return this.http.put<Question>(
      'http://localhost:1337/Questions/' + questionId,
      question
    );
  }
}
