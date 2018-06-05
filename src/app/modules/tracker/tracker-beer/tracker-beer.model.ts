import { GeoPoint } from "@firebase/firestore-types";

export interface TrackerBeer {
  key: string,
  userKey: string,
  locationName: string,
  locationPoint: GeoPoint,
  beerName: string,
  beerBrewery: string,
  notes: string,
  rating: number,
  drinkingDate: Date,
}

export const trackerBeerDyn = {
  locationName: {
    label: 'Location Name',
    value: 'Where are you?',
    type: 'text',
    validation: {
      required: true
    }
  },
  beerName: {
    label: 'Beer Name',
    value: 'What beer did you drink?',
    type: 'text',
    validation: {
      required: true
    }
  },
  beerBrewery: {
    label: 'Brewery',
    value: 'What brewery made this beer?',
    type: 'text',
    validation: {
      required: true
    }
  },
  notes: {
    label: 'Notes',
    value: 'Any thoughts on this beer?',
    type: 'textarea',
    validation: {
      required: false
    }
  },
  rating: {
    label: 'Rating',
    value: 5,
    // type: 'rating',
    type: 'text',
    validation: {
      required: true
    }
  },
  locationLat: {
    label: 'Latitude',
    type: 'text',
    value: '',
    validation: {
      required: false
    }
  },
  locationLong: {
    label: 'Longitude',
    type: 'text',
    value: '',
    validation: {
      required: false
    }
  },
}

// export const person = {
//   name: {
//     label: 'Name',
//     value: 'Juri',
//     type: 'text',
//     validation: {
//       required: true
//     }
//   },
//   age: {
//     label: 'Age',
//     value: 32,
//     type: 'text'
//   },
//   gender: {
//     label: 'Gender',
//     value: 'M',
//     type: 'radio',
//     options: [
//       { label: "Male", value: 'M'},
//       { label: "Female", value: 'F'}
//     ]
//   }, 
//   city: {
//     label: 'City',
//     value: '39010',
//     type: 'select',
//     options: [
//       { label: "(choose one)", value: ''},
//       { label: "Bolzano", value: '39100'},
//       { label: "Meltina", value: '39010'},
//       { label: "Appiano", value: '39057'}
//     ],
//     validation: {
//       required: true
//     }
//   }
// }