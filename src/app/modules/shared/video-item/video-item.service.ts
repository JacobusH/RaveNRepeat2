import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VideoItem } from './video-item.model';
import 'rxjs/add/operator/switchMap'
import * as firebase from 'firebase/app';


@Injectable()
export class VideoItemService {
  videos: AngularFirestoreCollection<VideoItem>;
  
  constructor(private afs: AngularFirestore) { 
    this.videos = this.afs.collection('!Videos');
  }

  get(videoId: string): AngularFirestoreDocument<VideoItem> {
    console.log('vid: ' + videoId)
    return this.afs.doc('!Videos/' + videoId);
  }

  createNew(): VideoItem {
    let data: VideoItem = {
      key: '',
      youtubeId: '',
      description: '',
      ownerId: '',
      tags: {},
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
      };
      return data;
  }

  saveNewPlaylist(t: VideoItem): Promise<firebase.firestore.DocumentReference>  {
    let promise: Promise<firebase.firestore.DocumentReference> = this.videos.add(t);
    promise.then(x => {
      x.update({key: x.id});
    });

    return promise;
  }

  edit(item: VideoItem) {
    // return this.artistTracks.doc(item.key).update(item);
    this.videos.ref.where('key', '==', item.key).get().then(videos => {
        if(videos.size == 1) {
            videos.forEach(x => {
                this.videos.doc(x.id).update(item);
            })
        }
    })
  }


  delete(item: VideoItem)  {
    this.videos.ref.where('key', '==', item.key).get().then(videos => {
        if(videos.size == 1) {
          videos.forEach(x => {
                this.videos.doc(x.id).delete();
            })
        }
    })
  }



}
