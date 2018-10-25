import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EDialogConfirm} from '../../interfaces/enum/EDialogConfirm';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  EDialogConfirm = EDialogConfirm;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; text: string }) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
