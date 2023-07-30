import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareNameService } from 'src/playerName.service';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {
  playerName: string = '';

  constructor(private router: Router, private sharedNameService: ShareNameService) { }

  ngOnInit(): void {
    this.playerName = this.sharedNameService.getPlayerName()
  }

  previousPage(){
    this.router.navigate(['/quiz'])
  }
  seeResults(){
    this.router.navigate(['/results'])
  }
}
