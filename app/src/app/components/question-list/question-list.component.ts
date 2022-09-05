import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { QuizService } from '../../services/quiz.service';


/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() previewQuestions?:any[];


  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.previewQuestions!, event.previousIndex, event.currentIndex);
  }

  deleteQuestion(questionId:number){
    this.quizService.deleteQuestion(questionId).subscribe( () => {
      window.location.reload();
    });

  }

}
