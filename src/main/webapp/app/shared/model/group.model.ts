export interface IGroup {
  id?: number;
  name?: string;
  description?: string;
  userLogin?: string;
  userId?: number;
}

export const defaultValue: Readonly<IGroup> = {};
