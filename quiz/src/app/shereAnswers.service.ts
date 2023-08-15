import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class SheredAnswersService {
    sheredData:{correctAnswers: string[], userAnswers: string[]}
}