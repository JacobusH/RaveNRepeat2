import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormDynamicComponent implements OnInit {
  @Input() dataObject;

  constructor() { }

  ngOnInit() {
  }

}
