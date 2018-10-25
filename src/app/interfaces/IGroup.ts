export interface IGroup {
  Id: number;
  Name: string;
  isSystem: boolean;
  ParentGroupId: number;
  ParentGroupName: string;
  Department: string;
  DepartmentId: number;
  Guid: string;
  Projects: any;
  GroupUsers: any;
}
