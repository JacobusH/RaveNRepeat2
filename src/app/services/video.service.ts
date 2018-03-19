import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Video, UserComment, VideoPlaylist } from 'app/models/_index';
import 'rxjs/add/operator/switchMap'
import * as firebase from 'firebase/app';

@Injectable()
export class VideoService {
  videos: AngularFirestoreCollection<Video>;
  
  constructor(private afs: AngularFirestore) { 
    this.videos = this.afs.collection('!Videos');
  }

  createNew(): Video {
    let data: Video = {
      youtubeID: '',
      key: '',
      tags: new Array<string>(),
      views: 0,
      description: '',
      comments: new Array<UserComment>(),
      onPlaylists: Array<VideoPlaylist>(),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
      };
      return data;
  }

  save(t: Video): Promise<firebase.firestore.DocumentReference>  {
    let promise: Promise<firebase.firestore.DocumentReference> = this.videos.add(t);
    promise.then(x => {
      x.update({key: x.id});
    });

    return promise;
  }

  edit(item: Video): Promise<void> {
    return this.videos.doc(item.key).update(item);
  }

  delete(item: Video): Promise<void> {
    return this.videos.doc(item.key).delete();
  }

}
