import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NameService {
    private playerName: string = '';

    setPlayerName(name: string): void{
        this.playerName = name;
    }
    getPlayerName(): string {
        return this.playerName;
    }
}