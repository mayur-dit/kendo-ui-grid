import {Component, EventEmitter, Output} from '@angular/core';
import {Subscription} from 'rxjs';

import {FuseConfigService} from '@fuse/services/config.service';
import {ConstantService} from "../../../app/services/constant.service";

@Component({
  selector: 'fuse-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class FuseSearchBarComponent {
  collapsed: boolean;
  toolbarColor: string;
  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();
  onConfigChanged: Subscription;
  searchText: string = "";

  constructor(private fuseConfig: FuseConfigService,
              public cs: ConstantService,) {
    this.collapsed = true;
    this.onConfigChanged =
      this.fuseConfig.onConfigChanged
        .subscribe(
          (newSettings) => {
            this.toolbarColor = newSettings.colorClasses.toolbar;
          }
        );
  }

  collapse() {
    this.collapsed = true;
    this.searchText = "";
    this.cs.filterText.next("");
    this.onInput.emit("");
  }

  expand() {
    this.collapsed = false;
  }

  search(event) {
    const value: string = event.target.value;
    this.cs.filterText.next(value);
    this.onInput.emit(value);
  }

}
