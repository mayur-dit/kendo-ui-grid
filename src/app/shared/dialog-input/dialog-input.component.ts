import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EDialogConfirm} from '../../interfaces/enum/EDialogConfirm';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent implements OnInit {

  input: string;

  constructor(public dialogRef: MatDialogRef<DialogInputComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { title: string; text: string; defaultValue: string; }) {
    if (data.defaultValue) {
      this.input = data.defaultValue;
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCloseValue() {
    return this.input;
  }

}
