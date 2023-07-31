import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareNameService } from 'src/playerName.service';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-quiz-stucture',
  templateUrl: './quiz-stucture.component.html',
  styleUrls: ['./quiz-stucture.component.css']
})
export class QuizStuctureComponent implements OnInit {
  playerName: string = '';

  constructor(private router: Router, private shareNameService: ShareNameService, private questionService: QuestionsService) {}

  ngOnInit(): void {
    this.playerName = this.shareNameService.getPlayerName()
    this.firstQuestion()
  }

  submitResult(){
    this.router.navigate(['/your-result'])
  }
  previousPage(){
    this.router.navigate(['/login'])
  }
  firstQuestion(){
    let p = document.getElementById('question')as HTMLParagraphElement;
    let option1 = document.getElementById('option1')as HTMLSpanElement;
    let option2 = document.getElementById('option2')as HTMLSpanElement;
    let option3 = document.getElementById('option3')as HTMLSpanElement;

    let firstQuestion = this.questionService.randomQuestion();
    p.innerText = firstQuestion.question;

    function generateRandomNumber(min: number, max: number): number{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateUniqueRandomNumbers(count: number, min: number, max: number): number[] {
      if (max - min + 1 < count) {
        throw new Error('Unable to generate unique random numbers within the given range.');
      }

      const uniqueNumbers: number[] = [];
      while (uniqueNumbers.length < count){
        const randomNumber = generateRandomNumber(min,max);

        if (!uniqueNumbers.includes(randomNumber)){
          uniqueNumbers.push(randomNumber);
        }
      }
      return uniqueNumbers
    }
      
    let answersArray: string[] = [firstQuestion.answer1,firstQuestion.answer2,firstQuestion.answer3];
    
    const uniqueRandomNumbers = generateUniqueRandomNumbers(3, 0, 2);
    let RandomAnswersArray: string[] = [answersArray[uniqueRandomNumbers[0]], answersArray[uniqueRandomNumbers[1]], answersArray[uniqueRandomNumbers[2]]];
      
    option1.innerText = RandomAnswersArray[0];
    option2.innerText = RandomAnswersArray[1];
    option3.innerText = RandomAnswersArray[2];
    
  }

}


  
