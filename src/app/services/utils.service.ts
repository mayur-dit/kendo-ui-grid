import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {DialogConfirmComponent} from '../shared/dialog-confirm/dialog-confirm.component';
import {EDialogConfirm} from '../interfaces/enum/EDialogConfirm';
import {CookieService} from 'ngx-cookie-service';
import {ConstantService} from './constant.service';
import {Observable} from 'rxjs';
import {DialogInputComponent} from '../shared/dialog-input/dialog-input.component';
import * as moment from "moment";

@Injectable()
export class UtilsService {

  public static snack: MatSnackBar;

  constructor(public snackBar: MatSnackBar,
              private cookieService: CookieService,
              private constantService: ConstantService,
              public dialog: MatDialog) {
    UtilsService.snack = this.snackBar;
  }

  async reloadGlobalData() {
    if (!this.constantService.g_user || Object.keys(this.constantService.g_user).length === 0) return;
  }

  public static print(obj: any) {
    console.log(JSON.parse(JSON.stringify(obj)));
  }

  show_message(message: string) {
    UtilsService.snack.open(message, 'Close', <MatSnackBarConfig> {
      duration: 5000,
      verticalPosition: 'top',
    });
  }

  getProfileUrl(companyId: string): string {
    return `${this.constantService.API_ENDPOINT}/pr_profile/${companyId}`;
  }

  getDateInUserFormat(date) {
    return moment(date).format(this.constantService.DATE_FORMAT_USER);
  }

  public static camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter: string, index) {
      return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).replace(/\s+/g, ' ');
  }

  public static get_promise(observable: Observable<any>): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      observable.subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  show_confirmation(title: string, text: string, callback: Function) {
    let dialogRef = this.dialog.open(DialogConfirmComponent, <MatDialogConfig<{ title: string; text: string; }>>{
      data: {
        title: title,
        text: text
      }
    });
    dialogRef.afterClosed().subscribe((result: EDialogConfirm) => {
      callback(result);
    });
  }

  show_input_dialog(title: string, text: string, callback: Function, defaultValue?: string) {
    let dialogRef = this.dialog.open(DialogInputComponent, <MatDialogConfig<{ title: string; text: string; defaultValue?: string; }>>{
      data: {
        title: title,
        text: text,
        defaultValue: defaultValue
      }
    });
    dialogRef.afterClosed().subscribe((result: EDialogConfirm) => {
      callback(result);
    });
  }

  set_user_to_cookies() {
    this.cookieService.set('session', JSON.stringify(this.constantService.g_user), undefined, '/');
    this.cookieService.set('tokens', JSON.stringify(this.constantService.tokens), undefined, '/');
  }

  async get_user_from_cookies() {
    let g_user = this.get_cookie_value_json("session", {});
    let tokens = this.get_cookie_value_json("tokens", {});
    console.log(g_user);
    console.log(tokens);
    this.constantService.g_user = g_user;
    this.constantService.tokens = tokens;
    await this.reloadGlobalData();
  }

  get_cookie_value_json(cookieName: string, defaultValue: any): any {
    let cookieValue: string = this.cookieService.get(cookieName);
    try {
      cookieValue = JSON.parse(cookieValue);
    } catch (e) {
      cookieValue = defaultValue;
    }
    return cookieValue;
  }

  onFormValuesChanged(form, error) {
    for (const field in error) {
      if (!error.hasOwnProperty(field)) {
        continue;
      }
      error[field] = {}; // Clear previous errors
      const control = form.get(field); // Get the control
      if (control && control.dirty && !control.valid) {
        error[field] = control.errors;
      }
    }
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
