import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-stucture',
  templateUrl: './quiz-stucture.component.html',
  styleUrls: ['./quiz-stucture.component.css']
})
export class QuizStuctureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitResult(){
    this.router.navigate(['/your-result'])
  }
  previousPage(){
    this.router.navigate(['/login'])
  }
}
