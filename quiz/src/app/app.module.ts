import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuizStuctureComponent } from './quiz-structure/quiz-stucture.component';
import { SubmitResultComponent } from './submit-result/submit-result.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';

import { NameService } from 'src/app/playerName.service';
import { QuestionsService } from './questions.service';
import { RandomNumberService } from './random-numbers.service';
import { SheredAnswersService } from 'src/app/shereAnswers.service';

import { Routes, RouterModule } from '@angular/router';
import { QuestionStructureComponent } from './quiz-structure/question-structure/question-structure.component';

import { ReactiveFormsModule } from '@angular/forms';

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
    QuestionStructureComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    NameService, 
    QuestionsService, 
    RandomNumberService,
    SheredAnswersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
