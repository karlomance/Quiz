import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    questions: {question: string, options: string[], correctAnswer: string}[] = [
        {
            question: 'Name the biggest island in the world.', 
            options: ['Greenland','New Guinea','Madagascar'], 
            correctAnswer:'Greenland'
        },
        {
            question: 'Which county produces the most coffee in the world?', 
            options: ['Brazil','SAD','China'], 
            correctAnswer:'Brazil'
        },
        {
            question: 'How many grammys does John Legend have?', 
            options: ['11','8','4'], 
            correctAnswer:'11'
        },
        {
            question: 'What is the brightest star in the sky?', 
            options: ['Sirius', 'Venus', 'North star'], 
            correctAnswer:'Sirius'
        },
        {
            question: 'What nut is used to make marzipan?', 
            options: ['almond', 'hazel', 'walnut'], 
            correctAnswer:'almond'
        },
        {
            question: 'How many wives did Henry VII have?', 
            options: ['6', '3', '1'], 
            correctAnswer:'6'
        },
        {
            question: 'What is it called when a bootle of champagne is open with a sword?', 
            options: ['Sabering', 'Sword opening', 'Brimoncourt'], 
            correctAnswer:'Sabering'
        },
        {
            question: 'What color is giraffe`s tongue?', 
            options: ['Blue-black', 'Red-purple', 'yellow'], 
            correctAnswer:'Blue-black'
        },
        {
            question: 'What country has the most vending machines per capita?', 
            options: ['Japan', 'SAD', 'North Korea'], 
            correctAnswer:'Japan'
        },
        {
            question: 'On average, how long does it take food to pass through the human body?', 
            options: ['53 hours', '24 hours', '6 hours'], 
            correctAnswer:'53 hours'
        }]
        
    
    randomQuestion(){
        const randomIndex = Math.floor(Math.random()* this.questions.length);
        const randomQuestion = this.questions[randomIndex];
        return randomQuestion
    }
    listOfRandomQuestions(){
        const listOfRandomQuestions = [];
        while(listOfRandomQuestions.length < 5){
            let randomQuestion = this.randomQuestion();
            if(!listOfRandomQuestions.includes(randomQuestion)){
                listOfRandomQuestions.push(randomQuestion);
            }
        }
        return listOfRandomQuestions
    }
}