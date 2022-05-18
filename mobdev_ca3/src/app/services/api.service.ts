import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    allSearch: Array<any>;

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes')
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters')
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
            this.allSearch = data as Array<any>;
        });

        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        this.http.get(('https://breakingbadapi.com/api/deaths')).subscribe(data => {
            this.allSearch = data as Array<any>;
        });

        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }
    
    getDeath(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths/${id}`)
    }
    
    searchQuote(input: string) {
        let selectedQuote: any[] = [];
        for (let quote of this.allSearch) {
            
            if (quote.author.toLowerCase().includes(input.toLowerCase())) {
                selectedQuote.push(quote);
            }
        }
        
        return of(selectedQuote);
    }

    searchDeath(inputResp: string, inputDeath: string) {
        let selectedResp: any[] = [];
        for (let death of this.allSearch) {

            if (death.responsible.toLowerCase().includes(inputResp.toLowerCase())) {
                if ((death.death.toLowerCase().includes(inputDeath.toLowerCase()))) {
                    selectedResp.push(death);
                }
            }
        }

        return of(selectedResp);
    }

    // searchDeath(input: string) {
        //     let selectedName: any[] = [];
        //     for (let death of this.allSearch) {
            
    //         if (death.death.toLowerCase().includes(input.toLowerCase())) {
    //             selectedName.push(death);
    //         }
    //     }

    //     return of(selectedName);
    // }

    // searchResponsible(input: string) {
    //     let selectedResp: any[] = [];
    //     for (let death of this.allSearch) {

    //         if (death.responsible.toLowerCase().includes(input.toLowerCase())) {
    //             selectedResp.push(death);
    //         }
    //     }

    //     return of(selectedResp);
    // }

}