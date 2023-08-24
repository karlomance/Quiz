import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NameService } from 'src/app/playerName.service';
import { SheredAnswersService } from 'src/app/shereAnswers.service';
import { ResultCheckService } from '../result-check.service';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {
  constructor(
    private router: Router, 
    private nameService: NameService, 
    private sheredAnswersService: SheredAnswersService,
    private resultCheckService: ResultCheckService
  ) { }

  firstFiveUserAnswers: string[] = [];
  lastFiveUserAnswers: string[] = [];
  result = this.resultCheckService.checkResults()
  playerName: string = '';
  sheredData: {correctAnswers: string[], userAnswers: string[]};

  ngOnInit(): void {
    this.playerName = this.nameService.getPlayerName()
    this.sheredData = this.sheredAnswersService.sheredData
    this.resultCheckService.checkResults()

    this.firstFiveUserAnswers = this.sheredData.userAnswers.slice(0, 5);
    this.lastFiveUserAnswers = this.sheredData.userAnswers.slice(5, 10);
  }

  checkAnswer(userAnswer: string, correctAnswer: string) {
    return userAnswer === correctAnswer ? 'green' : 'red';
  }

  previousPage(){
    this.router.navigate(['/quiz'])
  }
  seeResults(){
    this.router.navigate(['/results'])
  }
}
