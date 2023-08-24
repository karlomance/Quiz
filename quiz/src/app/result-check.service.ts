import { Injectable } from "@angular/core";
import { SheredAnswersService } from "./shereAnswers.service";
import { SheredData } from "./result-object.interface";

@Injectable({
    providedIn: 'root'
})
export class ResultCheckService {
    constructor(private sharedAnswersService: SheredAnswersService){}
    
    sheredData: SheredData;

    setSheredData(sheredData: SheredData): void {
      this.sheredData = sheredData;
    }
    
    checkResults(){
      let result = 0;
      for(let i = 0; i < this.sheredData.correctAnswers.length; i++){
        if(this.sheredData.userAnswers[i] === this.sheredData.correctAnswers[i]){
          result += 1;
        }
      }
      return result
    }
    

}