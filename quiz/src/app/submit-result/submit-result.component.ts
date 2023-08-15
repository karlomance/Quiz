import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NameService } from 'src/app/playerName.service';
import { SheredAnswersService } from 'src/app/shereAnswers.service';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {
  firstFiveUserAnswers: string[] = [];
  lastFiveUserAnswers: string[] = [];

  ngOnInit(): void {
    this.playerName = this.nameService.getPlayerName()
    this.sheredData = this.sheredAnswersService.sheredData
    this.checkResults()

    this.firstFiveUserAnswers = this.sheredData.userAnswers.slice(0, 5);
    this.lastFiveUserAnswers = this.sheredData.userAnswers.slice(6, 10);
  }

  playerName: string = '';
  sheredData: {correctAnswers: string[], userAnswers: string[]};
  


  constructor(
    private router: Router, 
    private nameService: NameService, 
    private sheredAnswersService: SheredAnswersService
  ) { }

  checkResults(){
    let result = 0;
    for(let i = 0; i < this.sheredData.correctAnswers.length; i++){
      if(this.sheredData.userAnswers[i] === this.sheredData.correctAnswers[i]){
        result += 1;
      }
    }
    return result
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
