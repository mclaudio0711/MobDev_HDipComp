import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  deaths: Observable<any>;
  deathsId: Observable<any>;
  inputDeath: string = '';
  inputResp: string = '';

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {

    this.deaths = this.api.getDeaths();
    this.deaths.subscribe(data => {
      console.log('dataDeaths', data);
    });
  }

  openDetails(death) {
    //I kept this part to keep the click-on effect
    // let deathsId = death.death_id;
    // this.router.navigateByUrl(`/tabs/deaths/${deathsId}`);
  }

  // Here I started the idea about researching
  // search() {
  //   this.deaths = this.api.searchDeath(this.input);
  // }
  // searchResp() {
  //   this.deaths = this.api.searchResponsible(this.Rinput);
  // }
  search() {
    this.deaths = this.api.searchDeath(this.inputResp,this.inputDeath);
  }
}
