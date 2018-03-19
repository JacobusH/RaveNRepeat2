import { User } from './user.model';

export interface VideoPlaylist {
  key: string,
  name: string,
  tags: Array<string>,
  madeBy: User,
  views: number,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
}