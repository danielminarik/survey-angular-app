import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/core/interfaces/option';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  @Input() answer: Answer;

  constructor() { }

  ngOnInit(): void {
  }

}
