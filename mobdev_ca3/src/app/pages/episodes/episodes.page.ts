import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;
  episodeId: Observable<any>;

  constructor(private router: Router, private api: ApiService, private http: HttpClient) { }

  ngOnInit() {
      this.episodes = this.api.getEpisodes();
      this.episodes.subscribe(data => {
      console.log('my episodes: ', data);
    });
  }

  openDetails(episode){
      let episodeId = episode.episode_id;
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
      this.episodeId.subscribe(data => {
        console.log('my episodeDetails', data);
      });
  }
}
