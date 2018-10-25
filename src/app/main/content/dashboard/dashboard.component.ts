import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {GroupService} from "../../../services/group.service";
import {IGroup} from "../../../interfaces/IGroup";
import {IApiResponse} from "../../../interfaces/IApiResponse";
import {SelectableSettings} from "@progress/kendo-angular-grid";
import * as _ from "lodash";
import {IGroupUser} from "../../../interfaces/IGroupUser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DashboardComponent implements OnInit {

  list: {
    groups: IGroup[],
    groupUsers: IGroupUser[]
  } = {
    groups: [],
    groupUsers: []
  };
  map: {
    groups: { [Id: string]: IGroup }
  } = {
    groups: {}
  };

  selectableSettings: {
    groups: SelectableSettings
  } = {
    groups: undefined
  };

  selected: {
    groups: number[];
  } = {
    groups: []
  };

  constructor(private grouService: GroupService) {
  }

  ngOnInit() {
    this.grouService.list().subscribe((response: IApiResponse<IGroup>) => {
      this.list.groups = response.Data;
      this.map.groups = _.keyBy(this.list.groups, 'Id');
      console.log(response);
    });
    this.setSelectableSettings();
  }

  public setSelectableSettings(): void {
    this.selectableSettings.groups = {
      checkboxOnly: false,
      mode: 'single'
    };
  }

  onGroupSelected(selectedGroups: number[]) {
    let selectedGroup: IGroup = this.map.groups[selectedGroups[0]];
    this.grouService.getUsers(selectedGroup.Id).subscribe((response: IApiResponse<IGroupUser>) => {
      this.list.groupUsers = response.Data;
    });
  }


}
