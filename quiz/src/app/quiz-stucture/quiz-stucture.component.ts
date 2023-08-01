import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareNameService } from 'src/playerName.service';
import { QuestionsService } from '../questions.service';
import { RandomQuestionService } from '../random-question.service';

@Component({
  selector: 'app-quiz-stucture',
  templateUrl: './quiz-stucture.component.html',
  styleUrls: ['./quiz-stucture.component.css']
})
export class QuizStuctureComponent implements OnInit {
  playerName: string = '';

  constructor(private router: Router, private shareNameService: ShareNameService, private questionService: QuestionsService, private randomQuestionService: RandomQuestionService) {}

  listOfQuestions = this.questionService.listOfRandomObjectQuestions()
  listOfAnswersPlaces = [];
  AddListOfAnswersPlaces() {
    while (this.listOfAnswersPlaces.length < 5){
      this.listOfAnswersPlaces.push(this.randomQuestionService.generateUniqueRandomNumbers())
    }
    return this.listOfAnswersPlaces
  }
  
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


  randomQuestion(questionWitchIsInQuestionArray: {id: number, question: string, answer1: string, answer2: string, answer3: string}){
    let p = document.getElementById('question')as HTMLParagraphElement;
    let option1 = document.getElementById('option1')as HTMLSpanElement;
    let option2 = document.getElementById('option2')as HTMLSpanElement;
    let option3 = document.getElementById('option3')as HTMLSpanElement;

    p.innerText = questionWitchIsInQuestionArray.question;

    let answersArray: string[] = [questionWitchIsInQuestionArray.answer1,questionWitchIsInQuestionArray.answer2,questionWitchIsInQuestionArray.answer3];
    
    const uniqueRandomNumbers = this.AddListOfAnswersPlaces()[this.count];
    let RandomAnswersArray: string[] = [answersArray[uniqueRandomNumbers[0]], answersArray[uniqueRandomNumbers[1]], answersArray[uniqueRandomNumbers[2]]];
      
    option1.innerText = RandomAnswersArray[0];
    option2.innerText = RandomAnswersArray[1];
    option3.innerText = RandomAnswersArray[2];
    
  }

  ngOnInit(): void {
    this.playerName = this.shareNameService.getPlayerName()
    this.randomQuestion(this.listOfQuestions[0])
  }


  
  generateQuestion(){
    this.randomQuestion(this.listOfQuestions[this.count]);
  }



  submitResult(){
    this.router.navigate(['/your-result'])
  }
  previousPage(){
    this.router.navigate(['/login'])
  }

}


  
