import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    allSearch: Array<any>;
    url = `https://www.breakingbadapi.com/api/episodes`;

    constructor(private http: HttpClient) { }

    searchData(title: string): Observable<any> {
        return this.http.get(`${this.url}?s=${encodeURI(title)}`).pipe(
            map(results => results['Search']));

    }

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
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
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

}