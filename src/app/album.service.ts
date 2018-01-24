import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  //return an array of all albums to marketplace component
  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }
  //remember that this.albums is the database array or list of current albums and this will put another new album on this list

  //return a single album with the provided id
  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
  }
}
