import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, interval } from 'rxjs';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ObservablesComponent implements OnInit {
  simple$; arr$; timer$;

  constructor() { }

  ngOnInit() {
    this.initObbys();
    this.runObbys();
    
  }

  initObbys() {
    this.simple$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.complete();
      console.log("complete!");
    });
    this.arr$ = Observable.from([1,2,3,4,5]);
    // emit 1 immediately, then every 8 seconds
    this.timer$ = Observable.timer(1, 8000);
  }

  runObbys() {
    // map
    this.simple$.map(val => +val * 2 ).subscribe(val => {
      console.log("simple val: " + val)
    });
    // 
    this.arr$.map(val => +val + 1).subscribe(val => {
      console.log("arr val: " + val)
    });
    // every time switch map executes it returns an observable
    let individualTimer$ = this.timer$.switchMap(() => Observable.interval(2000))
    // this gets reset when timer$ does
    individualTimer$.map(val => val +999).subscribe(val => {
      console.log("timer val: " + val)
    })

  }


}
