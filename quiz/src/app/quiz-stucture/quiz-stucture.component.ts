import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareNameService } from 'src/playerName.service';

@Component({
  selector: 'app-quiz-stucture',
  templateUrl: './quiz-stucture.component.html',
  styleUrls: ['./quiz-stucture.component.css']
})
export class QuizStuctureComponent implements OnInit {
  playerName: string = '';

  constructor(private router: Router, private shareNameService: ShareNameService) { }

  ngOnInit(): void {
    this.playerName = this.shareNameService.getPlayerName()
  }

  submitResult(){
    this.router.navigate(['/your-result'])
  }
  previousPage(){
    this.router.navigate(['/login'])
  }
}
