import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/core/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];
  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveys = this.surveyService.getAll();
  }

  onAddClick() {
    this.surveyService.addSurvey();
  }

}
