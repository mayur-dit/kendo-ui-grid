import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {FuseConfigService} from '@fuse/services/config.service';
import {FuseSidebarService} from '@fuse/components/sidebar/sidebar.service';

import {ConstantService} from '../../services/constant.service';
import {CookieService} from 'ngx-cookie-service';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'fuse-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class FuseToolbarComponent {
  userStatusOptions: any[];
  showLoadingBar: boolean;
  horizontalNav: boolean;
  noNav: boolean;
  navigation: any;

  constructor(private router: Router,
              private fuseConfig: FuseConfigService,
              private sidebarService: FuseSidebarService,
              private translate: TranslateService,
              public constantService: ConstantService,
              private cookieService: CookieService,
              private utils: UtilsService) {
    this.userStatusOptions = [
      {
        'title': 'Online',
        'icon': 'icon-checkbox-marked-circle',
        'color': '#4CAF50'
      },
      {
        'title': 'Away',
        'icon': 'icon-clock',
        'color': '#FFC107'
      },
      {
        'title': 'Do not Disturb',
        'icon': 'icon-minus-circle',
        'color': '#F44336'
      },
      {
        'title': 'Invisible',
        'icon': 'icon-checkbox-blank-circle-outline',
        'color': '#BDBDBD'
      },
      {
        'title': 'Offline',
        'icon': 'icon-checkbox-blank-circle-outline',
        'color': '#616161'
      }
    ];

    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.showLoadingBar = true;
        }
        if (event instanceof NavigationEnd) {
          this.showLoadingBar = false;
        }
      });

    this.fuseConfig.onConfigChanged.subscribe((settings) => {
      this.horizontalNav = settings.layout.navigation === 'top';
      this.noNav = settings.layout.navigation === 'none';
    });

    this.navigation = this.constantService.getNavigation();
  }

  toggleSidebarOpened(key) {
    this.sidebarService.getSidebar(key).toggleOpen();
  }

  search(value) {
    if (this.constantService.filterDataSource) {
      let tempValue = value.trim(); // Remove whitespace
      tempValue = tempValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.constantService.filterDataSource.filter = tempValue;
    }
    // Do your search here...
    // console.log(value);
  }

  getUserName() {
    return this.constantService.g_user.username;
  }

  getCompanyName() {
    return this.constantService.g_user.username;
  }

  logout() {
    this.constantService.g_user = undefined;
    this.cookieService.set('session', '', undefined, '/');
    this.cookieService.set('tokens', '', undefined, '/');
    this.router.navigate(['/']);
  }
}
