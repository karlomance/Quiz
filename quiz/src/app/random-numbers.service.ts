import { Injectable } from "@angular/core";
import { QuestionsService } from "./questions.service";

@Injectable({
    providedIn: 'root'
})

export class RandomNumberService {
  listOfRandomNumberArrays: number[][] = [];
  constructor(private questionService: QuestionsService){}

  randomNumberArray(): number[] {
    const uniqueNumbers: number[] = [];
    while (uniqueNumbers.length < 3){
      const randomNumber = Math.floor(Math.random() * 3);
  
      if (!uniqueNumbers.includes(randomNumber)){
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers //This returns Array of 3 random numbers.
  }
  ListOfRandomNumberArrays():number [][] {
    while (this.listOfRandomNumberArrays.length < 5){
      this.listOfRandomNumberArrays.push(this.randomNumberArray())
    }
    return this.listOfRandomNumberArrays
  } 
}