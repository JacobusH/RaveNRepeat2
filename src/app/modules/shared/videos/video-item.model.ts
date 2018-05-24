import { User } from '../../../models/user.model';
import { UserComment } from '../../../models/userComment.model';

export interface VideoItem {
  youtubeId: string,
  key: string,
  tags: {},
  description: string,
  // comments: Array<UserComment>, // maybe we just have to know they are a collection?...
  ownerId: string,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
}