import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { QuizService } from '../../services/quiz.service';
import { Question } from 'src/app/types/types';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  @Input() questions?: Question[];

  @Output() updateOrderEvent = new EventEmitter();

  constructor(private quizService: QuizService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions!, event.previousIndex, event.currentIndex);
    //ドロップリストが変更したことを検知する
    this.updateOrderEvent.emit();
  }

  deleteQuestion(questionId: number) {
    this.quizService.deleteQuestion(questionId).subscribe(() => {
      window.location.reload();
    });
  }

  openDialog(Id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((isDelete) => {
      if (isDelete) {
        this.deleteQuestion(Id);
      }
    });
  }
}
