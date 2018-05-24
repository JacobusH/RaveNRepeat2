import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable ,  Subject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TypeAheadComponent implements OnInit {
  @Output('searchedValue') searchedValue = new EventEmitter<string>();
  results: Observable<any[]>;
  offset = new Subject<string>();
  searchBox;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    // this.results = this.typeaheadSearch();
    // this.results = this.simpleSearch();
  }

  onkeyup(e) {
    this.offset.next(e.target.value.toLowerCase())
  }

  exactSearch () {
    // this.results = this.afs.collection(this.searchBox).valueChanges();
    this.searchedValue.next(this.searchBox);
  }

  simpleSearch() {
    return this.offset.pipe(
      filter(val => !!val), // filter empty strings
      switchMap(offset => {
        return this.afs.collection(offset).valueChanges()
      })
    )
  }

  typeaheadSearch() {
    return this.offset.pipe(
      filter(val => !!val), // filter empty strings
      switchMap(offset => {
        return this.afs.collection('!allArtists', ref => 
          ref.orderBy(`searchableIndex.${offset}`).limit(5)
      )
      .valueChanges()
      })
    )
  }

}
