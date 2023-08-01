import { Injectable } from "@angular/core";
import { QuestionsService } from "./questions.service";

@Injectable({
    providedIn: 'root'
})

export class RandomQuestionService {
    constructor(private questionService: QuestionsService){}

    generateUniqueRandomNumbers(): number[] {
        const uniqueNumbers: number[] = [];
        while (uniqueNumbers.length < 3){
          const randomNumber = Math.floor(Math.random() * 3);
  
          if (!uniqueNumbers.includes(randomNumber)){
            uniqueNumbers.push(randomNumber);
          }
        }
        return uniqueNumbers
      }

    

}