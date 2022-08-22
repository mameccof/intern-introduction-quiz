import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  selectedSelection?: string;

  selections: string[] = [
    "クラシック",
    "K-POP",
    "レゲエ",
    "J-POP",
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selection: string): void {
    this.selectedSelection = selection;
  }

}
