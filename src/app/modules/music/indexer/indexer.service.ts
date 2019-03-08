import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import {   } from '@google-cloud/firestore/firebase'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track, TrackOptions } from '../track.model';
import { ArtistIndex, TrackIndex } from './indexer.model';

import * as firebase from 'firebase/app';
import * as admin from 'firebase-admin';
import { firestore } from 'firebase';

@Injectable()
export class IndexerService {
  artistIndex: AngularFirestoreCollection<ArtistIndex>;
  trackIndex: AngularFirestoreCollection<ArtistIndex>;
  allArtists;
  
  constructor(private afs: AngularFirestore, private afDb: AngularFireDatabase) { 
    this.artistIndex = this.afs.collection('!ArtistIndex');
    this.trackIndex = this.afs.collection('!TrackIndex');
  }

  getAllArtists() {
    const db = admin.firestore();
    db.getCollections().then((collections) => {
      this.allArtists = collections;
    })

  }

  // createNew(): Track {
  //   let data: Track = {
  //       id: '',
  //       title: '',
  //       artists: '',
  //       genre: '',
  //       key: '',
  //       labels: '',
  //       remixers: '',
  //       releaseDate: new Date(),
  //       trackOptions: {} as TrackOptions
  //     };
  //     return data;
  // }

  // saveNewTrack(t: Track): Promise<firebase.firestore.DocumentReference>  {
  //   let promise: Promise<firebase.firestore.DocumentReference> = this.artistTracks.add(t);
  //   // promise.then(x => {
  //   //   x.update({key: x.id});
  //   // });

  //   return promise;
  // }

  // edit(item: Track) {
  //   // return this.artistTracks.doc(item.key).update(item);
  //   this.artistTracks.ref.where('title', '==', item.title).get().then(tracks => {
  //       if(tracks.size == 1) {
  //           tracks.forEach(x => {
  //               this.artistTracks.doc(x.id).update(item);
  //           })
  //       }
  //   })
  // }


  // delete(item: Track)  {
  //   this.artistTracks.ref.where('title', '==', item.title).get().then(tracks => {
  //       if(tracks.size == 1) {
  //           tracks.forEach(x => {
  //               this.artistTracks.doc(x.id).delete();
  //           })
  //       }
  //   })
  // }


}
