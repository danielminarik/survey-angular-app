import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/core/interfaces/question';
import { Survey } from 'src/app/core/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {
  survey: Survey;
  name: string;
  questions: Question[];

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.survey = this.surveyService.getSurveyById(this.route.snapshot.params['id']);
    this.name = this.survey.name;
    // ugly deep copy
    this.questions = JSON.parse(JSON.stringify(this.survey.questions))
  }

  save(formValues): void {
    let newSurvey = this.survey;
    newSurvey.name = formValues.name;
    newSurvey.questions = this.questions;
    this.surveyService.updateSurvey(this.survey.id, newSurvey);

    this.router.navigate(['/surveys']);
  }

  onQuestionAddClick() {
    if (this.questions.length < 4) {
      this.questions.push({ text: "new question", answers: [ { text: "new answer" } ] });
    }
  }

  onQuestionRemoveClick(index: number) {
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
    }
  }

  onAnswerAddClick(qIndex: number) {
    if (this.questions[qIndex].answers.length < 4) {
      this.questions[qIndex].answers.push({ text: "new answer" });
    }
  }

  onAnswerRemoveClick(qIndex: number, aIndex: number) {
    if (this.questions[qIndex].answers.length > 1) {
      this.questions[qIndex].answers.splice(aIndex, 1);
    }
  }

  indexTracker(index: number, obj: any): any {
    return index;
  }
}
