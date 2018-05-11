import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VideoPlaylist } from './video-playlist.model';
import 'rxjs/add/operator/switchMap'
import * as firebase from 'firebase/app';

@Injectable()
export class VideoPlaylistService {
  playlists: AngularFirestoreCollection<VideoPlaylist>;
  
  constructor(private afs: AngularFirestore) { 
    this.playlists = this.afs.collection('!Playlists');
  }

  get(playlistId: string): AngularFirestoreDocument<VideoPlaylist> {
    return this.afs.doc('!Playlists/' + playlistId);
  }

  getVideos(playlistId: string): AngularFirestoreCollection<string> {
    return this.afs.doc('!Playlists/' + playlistId).collection('VideosCollec');
  }

  createNew(): VideoPlaylist {
    let data: VideoPlaylist = {
      key: '',
      name: '',
      ownerId: '',
      videos: {},
      createdAt: new Date(),
      updatedAt: new Date()
      };
      return data;
  }

  saveNewPlaylist(t: VideoPlaylist): Promise<firebase.firestore.DocumentReference>  {
    let promise: Promise<firebase.firestore.DocumentReference> = this.playlists.add(t);
    promise.then(x => {
      x.update({key: x.id});
    });

    return promise;
  }

  edit(item: VideoPlaylist) {
    // return this.artistTracks.doc(item.key).update(item);
    this.playlists.ref.where('key', '==', item.key).get().then(playlists => {
        if(playlists.size == 1) {
            playlists.forEach(x => {
                this.playlists.doc(x.id).update(item);
            })
        }
    })
  }


  delete(item: VideoPlaylist)  {
    this.playlists.ref.where('key', '==', item.key).get().then(playlists => {
        if(playlists.size == 1) {
          playlists.forEach(x => {
                this.playlists.doc(x.id).delete();
            })
        }
    })
  }



}
