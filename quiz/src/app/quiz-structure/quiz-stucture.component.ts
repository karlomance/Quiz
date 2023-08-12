import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NameService } from 'src/app/playerName.service';


@Component({
  selector: 'app-quiz-stucture',
  templateUrl: './quiz-stucture.component.html',
  styleUrls: ['./quiz-stucture.component.css']
})
export class QuizStuctureComponent implements OnInit {
  playerName: string = '';

  constructor(private router: Router, private nameService: NameService) {}

  ngOnInit(): void {
    this.playerName = this.nameService.getPlayerName()
    
  }

  previousPage(){
    this.router.navigate(['/login'])
  }
  

}
  
