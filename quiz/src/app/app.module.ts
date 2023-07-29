import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuizStuctureComponent } from './quiz-stucture/quiz-stucture.component';
import { SubmitResultComponent } from './submit-result/submit-result.component';
import { ResultsComponent } from './results/results.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'quiz', component: QuizStuctureComponent},
  {path: 'your-result', component: SubmitResultComponent},
  {path: 'results', component: ResultsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent,
    QuizStuctureComponent,
    SubmitResultComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
