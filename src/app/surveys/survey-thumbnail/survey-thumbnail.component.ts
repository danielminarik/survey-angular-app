import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/core/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-thumbnail',
  templateUrl: './survey-thumbnail.component.html',
  styleUrls: ['./survey-thumbnail.component.css']
})
export class SurveyThumbnailComponent implements OnInit {
  @Input() survey: Survey;

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.router.navigate(['surveys/edit', this.survey.id]);
  }

  onRemoveClick() {
    this.surveyService.removeSurveyById(this.survey.id);
  }
}
