import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SurveyService } from './survey.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate {

  constructor(private surveyService: SurveyService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const surveyExists = !!this.surveyService.getSurveyById(route.params['id']);
    if (!surveyExists) {
      this.router.navigate(['error']);
    }
    return surveyExists;
  }
}
