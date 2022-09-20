import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { QuizService } from '../../services/quiz.service';
import { Question } from 'src/app/types/types';


/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questions?:Question[];

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions!, event.previousIndex, event.currentIndex);
  }

  deleteQuestion(questionId:number){
    this.quizService.deleteQuestion(questionId).subscribe( () => {
      window.location.reload();
    });
  }

}
