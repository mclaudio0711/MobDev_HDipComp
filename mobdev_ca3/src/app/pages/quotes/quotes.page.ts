import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  quotes: any;
  quotesId: Observable<any>;
  kbinput: string = '';

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.quotes = this.api.getQuotes();
    this.quotes.subscribe(data => {
      console.log('my quotes', data);
    });
  }

  search() {
    this.quotes = this.api.searchQuote(this.kbinput);
  }

  openDetails(quotes) {
    let quotesId = quotes.quote_id;
    this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
  }

}
