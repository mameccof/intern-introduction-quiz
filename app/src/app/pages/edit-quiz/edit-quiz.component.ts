import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {


  quiz: Question = {
    question: "",
    explanation: "",
    selection: [
      {
        sentence: "",
        is_correct: false,
        sort_num: 1,
      },
      {
        sentence: "",
        is_correct: false,
        sort_num: 2,
      },
      {
        sentence: "",
        is_correct: true,
        sort_num: 3,
      },
      {
        sentence: "",
        is_correct: false,
        sort_num: 4,
      }
    ],
    order: parseInt(localStorage.getItem("question_num") ?? "0") + 1,
    user: parseInt(localStorage.getItem("loginUser") ?? "0"),
  }

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getQuiz(id);
    }

  }

  registerQuiz(){

    if(this.quiz.id){
      this.quizService.putQuiz(this.quiz,this.quiz.id ?? 0).subscribe( q => {
        this.router.navigate(['/home']);
        console.log(q);
      })
    }else{
      this.quizService.postQuiz(this.quiz).subscribe( q => {
        this.router.navigate(['/home']);
        console.log(q);
      })
    }
  }

  getQuiz(id:number ){
    this.quizService.getQuiz(id).subscribe( quiz => {
      console.log(quiz);
      this.quiz = quiz;
    } );
  }

  setCorrect(i: number){
    for(let selection of this.quiz.selection){
      selection.is_correct = false;
    }
    this.quiz.selection[i].is_correct = true;
  }

}
