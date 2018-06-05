import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track, TrackOptions } from 'app/models/_index';

import * as firebase from 'firebase/app';

@Injectable()
export class TrackService {
  artistTracks: AngularFirestoreCollection<Track>;
  
  constructor(private afs: AngularFirestore) { 
    this.artistTracks = this.afs.collection('ACM');
  }

  get(artist: string): AngularFirestoreCollection<Track> {
    return this.afs.collection(artist);
    // return this.afs.collection(artist);
  }

  createNew(): Track {
    let data: Track = {
        id: '',
        title: '',
        artists: '',
        genre: '',
        key: '',
        labels: '',
        remixers: '',
        releaseDate: new Date(),
        trackOptions: {} as TrackOptions
      };
      return data;
  }

  saveNewTrack(t: Track): Promise<firebase.firestore.DocumentReference>  {
    let promise: Promise<firebase.firestore.DocumentReference> = this.artistTracks.add(t);
    // promise.then(x => {
    //   x.update({key: x.id});
    // });

    return promise;
  }

  edit(item: Track) {
    // return this.artistTracks.doc(item.key).update(item);
    this.artistTracks.ref.where('title', '==', item.title).get().then(tracks => {
        if(tracks.size == 1) {
            tracks.forEach(x => {
                this.artistTracks.doc(x.id).update(item);
            })
        }
    })
  }


  delete(item: Track)  {
    this.artistTracks.ref.where('title', '==', item.title).get().then(tracks => {
        if(tracks.size == 1) {
            tracks.forEach(x => {
                this.artistTracks.doc(x.id).delete();
            })
        }
    })
  }


}
