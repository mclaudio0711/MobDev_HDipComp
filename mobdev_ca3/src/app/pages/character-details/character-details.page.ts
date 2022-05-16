import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
// import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character: any;
  characterId = null;

  constructor(private activatedRoute:
    ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {
      this.character = res[0];

    });
  }

}
