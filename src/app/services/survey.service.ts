import { Injectable } from '@angular/core';
import { Survey } from '../core/interfaces/survey';

const NEW_SURVEY_NAME = "New survey";

@Injectable({
  providedIn: 'root'
})

export class SurveyService {
  private newCounter = 0;
  // Create sample data
  private readonly surveys: Survey[] = [
    {
      id: 1,
      name: "Favourite meal",
      questions: [
        { text: "Choose one", answers: [{ text: "chicken" }, { text: "egg" }] },
        { text: "Does pineapple belong on pizza?", answers: [{ text: "yes" }, { text: "no" }] }
      ]
    },
    {
      id: 2,
      name: "Test survey",
      questions: [
        { text: "What was first?", answers: [{ text: "chicken" }, { text: "egg" }] }
      ]
    },
    {
      id: 3,
      name: "Random questions",
      questions: [
        { text: "What is your favourite color?", answers: [{ text: "red" }, { text: "green" }, { text: "blue" }, { text: "yellow" }] },
        { text: "Where do you live?", answers: [{ text: "Christchurch" }, { text: "Wellington" }, { text: "Auckland" }] },
        { text: "Choose one number", answers: [{ text: "15875" }, { text: "100" }, { text: "3.14" }] }
      ]
    },
  ];

  constructor() { }

  getAll() {
    return this.surveys;
  }

  getNextId(): number {
    let existingIds = this.surveys.map(x => x.id);
    return existingIds.length === 0
      ? 1
      : Math.max(...existingIds) + 1;
  }

  getNewSurveyName(): string {
    if (this.newCounter === 0) {
      this.newCounter++;
      return NEW_SURVEY_NAME;
    }
    this.newCounter++;
    return `${NEW_SURVEY_NAME} (${this.newCounter})`;
  }

  addSurvey() {
    this.surveys.unshift({
      id: this.getNextId(),
      name: this.getNewSurveyName(),
      questions: [
        {
          text: "Sample question", answers: [
            { text: "option A" }, { text: "option B" }
          ]
        }
      ]
    });
  }

  getSurveyById(id: number): Survey {
    return this.surveys.find(x => x.id == id);
  }

  removeSurveyByName(id: number) {
    let survey = this.getSurveyById(id);
    this.surveys.splice(this.surveys.indexOf(survey), 1);
  }

  updateSurvey(id: number, newSurvey: Survey) {
    let oldSurveyIndex = this.surveys.indexOf(this.getSurveyById(id));
    this.surveys[oldSurveyIndex] = newSurvey;
  }
}
