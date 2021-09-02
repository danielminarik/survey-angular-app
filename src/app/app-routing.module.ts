import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteActivatorService } from './services/route-activator.service';
import { ErrorPageComponent } from './surveys/error-page/error-page.component';
import { SurveyDetailComponent } from './surveys/survey-detail/survey-detail.component';
import { SurveyEditComponent } from './surveys/survey-edit/survey-edit.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id', component: SurveyDetailComponent, canActivate: [RouteActivatorService] },
  { path: 'surveys/edit/:id', component: SurveyEditComponent, canActivate: [RouteActivatorService] },
  { path: 'error', component: ErrorPageComponent },
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
