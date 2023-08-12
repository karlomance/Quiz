import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NameService } from 'src/app/playerName.service';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {
  playerName: string = '';

  constructor(private router: Router, private nameService: NameService) { }

  ngOnInit(): void {
    this.playerName = this.nameService.getPlayerName()
  }

  previousPage(){
    this.router.navigate(['/quiz'])
  }
  seeResults(){
    this.router.navigate(['/results'])
  }
}
