import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    questions: {id: number, question: string, answer1: string, answer2: string, answer3: string}[] = [
        {id: 1, question: 'Name the biggest island in the world.', answer1: 'Greenland', answer2: 'New Guinea', answer3: 'Madagascar'},
        {id: 2, question: 'Which county produces the most coffee in the world?', answer1: 'Brazil', answer2: 'SAD', answer3: 'China'},
        {id: 3, question: 'How many grammys does John Legend have?', answer1: '11', answer2: '8', answer3: '4'},
        {id: 4, question: 'What is the brightest star in the sky?', answer1: 'Sirius', answer2: 'Venus', answer3: 'North star'},
        {id: 5, question: 'What nut is used to make marzipan?', answer1: 'almond', answer2: 'hazel', answer3: 'walnut'},
        {id: 6, question: 'How many wives did Henry VII have?', answer1: '6', answer2: '3', answer3: '1'},
        {id: 7, question: 'What is it called when a bootle of champagne is open with a sword?', answer1: 'Sabering', answer2: 'Sword opening', answer3: 'Brimoncourt'},
        {id: 8, question: 'What color is giraffe`s tongue?', answer1: 'Blue-black', answer2: 'Red-purple', answer3: 'yellow'},
        {id: 9, question: 'What country has the most vending machines per capita?', answer1: 'Japan', answer2: 'SAD', answer3: 'North Korea'},
        {id: 10, question: 'On average, how long does it take food to pass through the human body?', answer1: '53 hours', answer2: '24 hours', answer3: '6 hours'},  
    ] 
    allQuestions(){
        return this.questions
    }
    randomQuestion(){
        const randomIndex = Math.floor(Math.random()* this.questions.length);
        const randomQuestion = this.questions[randomIndex];
        return randomQuestion
    }



}