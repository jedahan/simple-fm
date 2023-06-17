import { PersonalTagTypes } from '~/index.js';

export interface UserGetInfoParams {
  username: string;
}

export interface UserGetFriendsParams {
  username: string;
  limit?: number;
  page?: number;
}

export interface UserGetLovedTracksParams {
  username: string;
  limit?: number;
  page?: number;
}

export interface UserGetPersonalTagsParams {
  username: string;
  tag: string;
  tagType: PersonalTagTypes;
}

export interface UserGetRecentTracksParams {
  username: string;
  limit?: number;
  page?: number;
}

export interface UserGetTopAlbumsParams {
  username: string;
  limit?: number;
  page?: number;
}

export interface UserGetTopArtistsParams {
  username: string;
  limit?: number;
  page?: number;
}

export interface UserGetTopTagsParams {
  username: string;
  limit?: number;
}

export interface UserGetTopTracksParams {
  username: string;
  limit?: number;
  page?: number;
}
