import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type SystemRole = {
  id: string;
  name: string;
  description: string | null;
};

export type NameUrl = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NameUrl;
  location: NameUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
export type UserSystemRoles = {
  userId: string;
  systemRoleId: string;
};
export type DB = {
  system_roles: SystemRole;
  user_system_roles: UserSystemRoles;
  users: User;
};
