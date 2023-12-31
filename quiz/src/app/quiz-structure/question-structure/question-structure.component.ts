import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsService } from '../../questions.service';
import { RandomNumberService } from '../../random-numbers.service';
import { SheredAnswersService } from 'src/app/shereAnswers.service';
import { HttpService } from 'src/app/http.service';
import { ResultCheckService } from 'src/app/result-check.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-structure',
  templateUrl: './question-structure.component.html',
  styleUrls: ['./question-structure.component.css']
})
export class QuestionStructureComponent implements OnInit {

  constructor(
    private router: Router, 
    private questionService: QuestionsService, 
    private randomNumberService: RandomNumberService,
    private sheredAnswersService: SheredAnswersService,
    private httpService: HttpService,
    private resultCheckServise: ResultCheckService
  ) { }

  listOfQuestions = this.questionService.listOfRandomQuestions()
  listOfRandomNumbers = this.randomNumberService.ListOfRandomNumberArrays()
  radioButtonsForm: FormGroup;

  count: number = 0;

  answers:{id: number, answer: string}[] = [];
  sheredData: {correctAnswers: string[], userAnswers: string[]} = { correctAnswers: [], userAnswers: [] };

  ngOnInit(): void {
    this.addQuestion()
    this.addOfferedAnswers()
    
    this.radioButtonsForm = new FormGroup({
      'radioOptions': new FormControl(null, Validators.required)
    })
  }

  answerCheck(){
    let newAnswer: {id: number, answer: string} = {id: this.count, answer: this.radioButtonsForm.get('radioOptions').value};
    let index = this.answers.findIndex(object => object.id === newAnswer.id);
    if(index !== -1){
      this.answers[index] = newAnswer;
    } else {
      this.answers.push(newAnswer);
    }
  }
  
  clickNext(){
    this.answerCheck()
    if ( this.count < (this.listOfQuestions.length - 1) ){
      this.count += 1;
    }
    this.addQuestion()
    this.radioButtonsForm.reset()
  }
  clickPrevious(){
    this.addQuestion()
    if ( this.count > 0 ){
      this.count -= 1;
    }
    this.answerCheck()
    this.radioButtonsForm.reset()
  }

  countBooleanPrevious(){
    if(this.count === 0){
      return true
    }
  }
  countBooleanNext(){
    if(this.count === (this.listOfQuestions.length - 1)){
      return true
    }
  }

  addQuestion(){
    let p = document.getElementById('question')as HTMLParagraphElement;
    p.innerText = this.listOfQuestions[this.count].question
  }
  addOfferedAnswers(){
    let values = [
      this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][0]], 
      this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][1]], 
      this.listOfQuestions[this.count].options[this.listOfRandomNumbers[this.count][2]]
    ];
    
    return values
  }

  submitResult(){
    this.answerCheck()
    this.radioButtonsForm.reset()

    this.sheredData.correctAnswers = this.listOfQuestions.map(question => question.correctAnswer);
    this.sheredData.userAnswers = this.answers.map(question => question.answer);
    this.sheredAnswersService.sheredData = this.sheredData;
    this.resultCheckServise.setSheredData(this.sheredData);

    this.router.navigate(['/your-result'])


    //http Post - object {name, result, date}
    this.httpService.postRequest();
  }
}
