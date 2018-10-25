import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {FuseSplashScreenService} from '@fuse/services/splash-screen.service';
import {FuseNavigationService} from '@fuse/components/navigation/navigation.service';

@Component({
  selector: 'fuse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService,
              private fuseNavigationService: FuseNavigationService,
              private fuseSplashScreen: FuseSplashScreenService) {
    // Add languages
    this.translate.addLangs(['en', 'tr']);

    // Set the default language
    this.translate.setDefaultLang('en');

    // Use a language
    this.translate.use('en');
  }
}
