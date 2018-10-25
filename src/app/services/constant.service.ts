import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from "rxjs/Rx";
import {IUser} from "../interfaces/IUser";
import {ITokenResponse} from "../interfaces/ITokenResponse";

@Injectable()
export class ConstantService {

  g_user: Partial<IUser> = <Partial<IUser>>{}; // It will store logged in users full object
  tokens: ITokenResponse = <any>{}; // It will contain tokens.
  version: string = "1.0";
  API_ENDPOINT: string = 'https://swagger.threatmodeler.us';

  DATE_FORMAT_USER: string = 'DD-MM-YYYY';
  DATETIME_FORMAT_USER: string = 'DD-MM-YYYY H:mm A';
  filterDataSource: MatTableDataSource<any>;
  filterText: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private cookieService: CookieService) {
  }

  getNavigation() {
    let navigation = [];
    navigation.push({
      'id': 'applications', 'title': 'Menu', 'type': 'group',
      'children': [
        {'id': 'dashboard', 'title': 'Dashboard', 'type': 'item', 'icon': 'dashboard', 'url': '/dashboard'},
      ]
    });
    return navigation;
  }

  getTokenHeader() {
    return {
      'headers': {
        'Authorization': 'Bearer ' + this.tokens.access_token,
      }
    };
  }

}
