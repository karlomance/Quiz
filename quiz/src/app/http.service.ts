import { Injectable } from '@angular/core';
import { NameService } from './playerName.service';
import { ResultObject } from './result-object.interface';
import { ResultCheckService } from './result-check.service';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './result-object.interface';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(
        private nameService: NameService, 
        private resultCheckService: ResultCheckService,
        private http: HttpClient
    ){}

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
    postRequest(){
        this.http.post('https://quiz-6ddd7-default-rtdb.europe-west1.firebasedatabase.app/results.json', this.getObject()).subscribe();
    }

    getRequest(){
        return this.http.get<{[key:string]:Post}>('https://quiz-6ddd7-default-rtdb.europe-west1.firebasedatabase.app/results.json')
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)){
                            postsArray.push({...responseData[key],id:key});
                        }
                    }
                    return postsArray
                })
            )
    }
    


}