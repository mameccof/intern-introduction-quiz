import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  deleteQuestion(questionId: number) {
    return this.http.delete<Question>(
      `${environment.API_URL}/Questions/${questionId}`
    );
  }

  postQuiz(question: Question) {
    return this.http.post<Question>(
      `${environment.API_URL}/Questions/`,
      question
    );
  }

  getQuiz(id: number): Observable<Question> {
    return this.http.get<Question>(`${environment.API_URL}/Questions/${id}`);
  }

  putQuiz(question: Question, questionId: number) {
    return this.http.put<Question>(
      `${environment.API_URL}/Questions/${questionId}`,
      question
    );
  }
}
