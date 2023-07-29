import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.css']
})
export class SubmitResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  previousPage(){
    this.router.navigate(['/quiz'])
  }
  seeResults(){
    this.router.navigate(['/results'])
  }
}
