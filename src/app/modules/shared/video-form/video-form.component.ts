import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Video } from 'app/models/_index';
import { VideoService } from 'app/services/_index';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideoFormComponent implements OnInit {
  private model = this.videoService.createNew();
  private selectedVideo: Video;
  private videos: Observable<{}[]>;
  private itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}];

  constructor(private videoService: VideoService) { 
    this.videos = this.videoService.videos.valueChanges();
  }

  ngOnInit() {
  }

  saveVideo(form: NgForm) {
    // uploading new teacher with picture
    if(this.selectedVideo == null) {
      this.videoService.save(this.model)
      this.model = this.videoService.createNew();
      form.reset();
    }
    // editing testimonial
    else {
      this.videoService.edit(this.selectedVideo)
      form.reset();
    }
  }

  setNewVideo() {
    this.selectedVideo = null;
    this.model = this.videoService.createNew();
  }

  setSelectedVideo(faq: Video) {
    this.selectedVideo = faq;
    this.model = faq;
  }

  deleteVideo(form: NgForm) {
    form.reset();
    this.videoService.delete(this.selectedVideo);
  }


}
