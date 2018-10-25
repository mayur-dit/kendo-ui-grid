export interface IGroupUser {
  Id: number;
  GroupId: number;
  GroupName: string;
  UserId: number;
  UserName: string;
  isReadOnly: boolean;
  isAdmin: boolean;
  Guid: string;
}
