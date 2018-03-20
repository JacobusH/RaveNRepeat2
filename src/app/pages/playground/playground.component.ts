import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {trigger, transition} from "@angular/animations";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaygroundComponent implements OnInit {
  name: string = 'ahhhh';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.name = result;
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h2 mat-dialog-title>Hi {{data.name}}</h2>
  <mat-dialog-content>Are you sure?</mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close>No</button>
    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
    <button mat-button [mat-dialog-close]="true">Yes</button>
  </mat-dialog-actions>`,
})
export class DialogOverviewExampleDialog {

constructor(
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data);
  }

onNoClick(): void {
  this.dialogRef.close();
}

}