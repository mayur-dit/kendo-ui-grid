import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {Router} from '@angular/router';
import {ConstantService} from '../services/constant.service';
import {UtilsService} from '../services/utils.service';
import {UserService} from "../services/user.service";
import {ITokenResponse} from "../interfaces/ITokenResponse";
import {IErrorResponse} from "../interfaces/IErrorResponse";
import {IUser} from "../interfaces/IUser";


@Component({
  selector: 'fuse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: fuseAnimations
})
export class FuseLoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  version: string = "";

  constructor(private fuseConfig: FuseConfigService,
              private formBuilder: FormBuilder,
              private route: Router,
              private utils: UtilsService,
              private userService: UserService,
              private constantService: ConstantService) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
    this.loginFormErrors = {
      user_email: {},
      user_password: {}
    };
  }

  ngOnInit() {
    this.version = this.constantService.version;

    this.loginForm = this.formBuilder.group(<ILoginFormInterface><any>{
      user_email: ['', [Validators.required]],
      user_password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.utils.onFormValuesChanged(this.loginForm, this.loginFormErrors);
    });

  }

  onLoginClick() {
    let user: ILoginFormInterface = <any>this.loginForm.value;
    this.userService.getToken(user.user_email, user.user_password).subscribe(async (tokens: ITokenResponse) => {
      this.constantService.g_user = {
        username: user.user_email,
        password: ''
      };
      this.constantService.tokens = tokens;
      this.utils.set_user_to_cookies();
      this.utils.show_message("Welcome " + user.user_email);
      this.route.navigate(['dashboard']);
    }, (errorResponse: IErrorResponse) => {
      console.log(errorResponse);
      this.utils.show_message(errorResponse.error.error_description);
    });
  }
}

interface ILoginFormInterface {
  user_email: string;
  user_password: string;
}
