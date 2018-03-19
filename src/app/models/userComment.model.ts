import { User } from './user.model';

export interface UserComment {
  key: string,
  madeBy: User,
  comment: string,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
}