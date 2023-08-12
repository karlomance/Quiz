import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { QuestionsService } from '../../questions.service';
import { RandomNumberService } from '../../random-numbers.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-structure',
  templateUrl: './question-structure.component.html',
  styleUrls: ['./question-structure.component.css']
})
export class QuestionStructureComponent implements OnInit {

  constructor(
    private router: Router, 
    private questionService: QuestionsService, 
    private randomNumberService: RandomNumberService
  ) { }

  listOfQuestions = this.questionService.listOfRandomQuestions()
  listOfRandomNumbers = this.randomNumberService.ListOfRandomNumberArrays()
  radioButtonsForm: FormGroup;

  count: number = 0;
  countPlusOne(){
    if ( this.count < 4 ){
      this.count += 1;
    }
  }
  countMinusOne(){
    if ( this.count > 0 ){
      this.count -= 1;
    }
  }
  countBooleanPrevious(){
    if(this.count === 0){
      return true
    }
  }
  countBooleanNext(){
    if(this.count === 4){
      return true
    }
  }


  addQuestion(){
    let p = document.getElementById('question')as HTMLParagraphElement;
    p.innerText = this.listOfQuestions[this.count].question
  }
  addOfferedAnswers(){
    // let value1 = this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][0]];
    // let value2 = this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][1]];
    // let value3 = this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][2]];
    let values =[
      this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][0]], 
      this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][1]], 
      this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][2]]
    ];
    
    // return [value1, value2, value3]
    return values
  }

  ngOnInit(): void {
    this.addOfferedAnswers()
    this.addQuestion()

    this.radioButtonsForm = new FormGroup({
      'radioOptions': new FormControl(null)
    })
  }
  
  submitResult(){
    this.router.navigate(['/your-result'])

    console.log(this.radioButtonsForm.get('radioOptions').value)
  }
}
