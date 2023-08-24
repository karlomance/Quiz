import { Injectable } from '@angular/core';
import { NameService } from './playerName.service';
import { ResultObject } from './result-object.interface';
import { ResultCheckService } from './result-check.service';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private nameService: NameService, private resultCheckService: ResultCheckService){}

    setDate(){
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        return `${day}.${month}.${year}.`;
    }
    getObject(){
        let data: ResultObject = {
            name: this.nameService.getPlayerName(),
            result: this.resultCheckService.checkResults(),
            date: this.setDate()
        }
        return data
    }
    
    


}