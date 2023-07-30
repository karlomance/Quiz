import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ShareNameService } from 'src/playerName.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  playerName: string;

  constructor(private router: Router, private shareNameService: ShareNameService) { }

  ngOnInit(): void {
  }

  playQuiz(playerName: string){
    this.shareNameService.setPlayerName(playerName);


    this.router.navigate(['/quiz'])
  }
  previousPage(){
    this.router.navigate([''])
  }
}
