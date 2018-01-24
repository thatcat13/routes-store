import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})


export class MarketplaceComponent implements OnInit {


  constructor(private router: Router, private albumService: AlbumService) { }
  //constructor so that when the component is made the service is available to use (with its connected methods)

  albums: FirebaseListObservable<any[]>;
  //if there are albums, this is the type it'll be, which is any type from firebase [objects have all sorts of types of data so the 'any' helps]

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum){
    this.router.navigate(['albums', clickedAlbum.$key]);
  }
}
