import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal', 
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }


}

