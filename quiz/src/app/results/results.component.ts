import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../http.service';
import { Post } from '../result-object.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) {}

  results: Post[] = [];

  ngOnInit(): void {
    this.httpService.getRequest().subscribe(data => {
      this.results = data
    });
  }

  previousPage(){
    this.router.navigate(['/your-result'])
  }
  goToNewQuiz(){
    this.router.navigate(['/'])
  }
}
