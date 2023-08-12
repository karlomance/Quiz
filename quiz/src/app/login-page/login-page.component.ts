import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from 'src/app/playerName.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  playerName: string;

  constructor(private router: Router, private nameService: NameService) { }

  ngOnInit(): void {
  }

  playQuiz(playerName: string){
    this.nameService.setPlayerName(playerName);


    this.router.navigate(['/quiz'])
  }
  previousPage(){
    this.router.navigate([''])
  }
}
