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
        is_correct: true,
        sort_num: 1,
      },
      {
        sentence: "",
        is_correct: false,
        sort_num: 2,
      },
      {
        sentence: "",
        is_correct: false,
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
      this.quizService.getQuiz(id).subscribe( quiz => {
        this.quiz = quiz;
      } );
    }else{
      this.quizService.getTemplate().subscribe( template => {
        this.quiz.question = template.question;
        this.quiz.selection = template.selection;
        this.quiz.explanation = "解説文はありません";
      });
    }
  }

  registerButton(){
    if(this.quiz.id){
      this.quizService.putQuiz(this.quiz,this.quiz.id ?? 0).subscribe( q => {
        this.router.navigate(['/home']);
      })
    }else{
      this.quizService.postQuiz(this.quiz).subscribe( q => {
        this.router.navigate(['/home']);
      })
    }
  }

  //2回同じテンプレを引かないようにしたい
  randomButton(){
    this.quizService.getTemplate().subscribe(template => {
      if(this.quiz.question === template.question){
        this.randomButton();
      }else{
        this.quiz.question = template.question;
        this.quiz.selection = template.selection;
        this.quiz.explanation = "解説文はありません";
      }
    });
  }

  setCorrect(i: number){
    for(let selection of this.quiz.selection){
      selection.is_correct = false;
    }
    this.quiz.selection[i].is_correct = true;
  }

}
