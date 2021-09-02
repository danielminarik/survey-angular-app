import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyThumbnailComponent } from './surveys/survey-thumbnail/survey-thumbnail.component';
import { SurveyService } from './services/survey.service';
import { SurveyDetailComponent } from './surveys/survey-detail/survey-detail.component';
import { ErrorPageComponent } from './surveys/error-page/error-page.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { AnswerDetailComponent } from './answers/answer-detail/answer-detail.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { SurveyEditComponent } from './surveys/survey-edit/survey-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    SurveyThumbnailComponent,
    SurveyDetailComponent,
    ErrorPageComponent,
    QuestionListComponent,
    AnswerListComponent,
    AnswerDetailComponent,
    QuestionDetailComponent,
    SurveyEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
