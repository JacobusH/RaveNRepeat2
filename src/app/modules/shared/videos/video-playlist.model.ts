import { AngularFirestoreCollection } from "angularfire2/firestore";

// export class User {

//     constructor(
//       public authID: string = '',
//       public authMethod: string = '',
//       public authDisplayName: string = '',
//       public authPhotoUrl: string = '',
//       public key: string = '',
//       public name: string = '',
//       public email: string = '',
//       public password: string = '',
//       public roles: string = '',
//       public isActive: boolean = true,
//       public createdAt: Date = new Date(),
//       public updatedAt: Date = new Date()
//     ) {}
// }

export interface VideoPlaylist {
  key: string,
  name: string,
  ownerId: string,
  videos: {}, // so we can search
  createdAt: Date,
  updatedAt: Date
}