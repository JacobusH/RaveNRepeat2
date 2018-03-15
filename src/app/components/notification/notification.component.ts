import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NotificationComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NotificationDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

//////////
// DIALOG TEMPLATE
//////////
@Component({
  selector: 'notification-dialog',
  templateUrl: 'notification-dialog',
})
export class NotificationDialog {

  constructor(
    public dialogRef: MatDialogRef<NotificationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



