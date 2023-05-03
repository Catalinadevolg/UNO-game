import { PlayerType } from 'types';

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  login: string;
  phone: string;
  avatar: string;
  status?: null;
}

export interface UserState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

export interface IServiceId {
  service_id: string;
}

export interface IErrorReason {
  reason: string;
}

export type LeaderboardRecord = { data: PlayerType };
export type LeaderListType = Array<LeaderboardRecord>;

export type LeaderboardState = {
  isLoading: boolean;
  leaderList: LeaderListType;
  error: string;
};
