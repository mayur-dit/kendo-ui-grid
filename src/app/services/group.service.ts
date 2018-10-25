import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from './constant.service';
import {CookieService} from 'ngx-cookie-service';
import {IGroup} from "../interfaces/IGroup";
import {IApiResponse} from "../interfaces/IApiResponse";
import {IGroupUser} from "../interfaces/IGroupUser";

@Injectable()
export class GroupService {

  url = '/api/groups';

  constructor(private http: HttpClient,
              public ConstantService: ConstantService,
              private cookieService: CookieService) {
  }

  list() {
    return this.http.get<IApiResponse<IGroup>>(this.ConstantService.API_ENDPOINT + this.url, this.ConstantService.getTokenHeader());
    // return this.http.get<IApiResponse<IGroup>>(`http://www.mocky.io/v2/5bd18e552f00007400d8fc5f`, this.ConstantService.getTokenHeader());
  }

  getUsers(groupId: number) {
    return this.http.post<IApiResponse<IGroupUser>>(this.ConstantService.API_ENDPOINT + `/api/group/users`, {
      "Id": groupId
    }, this.ConstantService.getTokenHeader());
  }


}
