import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConstantService} from "./constant.service";

@Injectable()
export class UserService {

  constructor(private http: HttpClient, public ConstantService: ConstantService) {
  }

  getToken(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<any>(this.ConstantService.API_ENDPOINT + `/token`, body.toString(), options);
  }
}
