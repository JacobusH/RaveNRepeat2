export interface UserComment {
  key: string,
  ownerId: string,
  comment: string,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
}