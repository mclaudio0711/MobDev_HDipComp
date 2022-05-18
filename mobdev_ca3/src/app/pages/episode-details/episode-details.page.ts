import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: any;
  episodeId = null;
  isFavourite = false;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
  // constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
      console.log(JSON.stringify(this.episode.episode_id));
    })


    // this.favouriteService.isFavouriteEpisode(this.episodeId).then(isFavorite => {
    //   this.isFavourite = isFavorite;
    // });
  }

  favouriteEpisode() {
    this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = true;
    });
  }

  unfavouriteEpisode() {
    this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = false;
    });
  }
}
