import { VideoPlaylist } from './video-playlist.model';
import { UserComment } from './userComment.model';

export interface Video {
  youtubeID: string,
  key: string,
  tags: Array<string>,
  views: number,
  description: string,
  comments: Array<UserComment>,
  onPlaylists: Array<VideoPlaylist>,
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date
}