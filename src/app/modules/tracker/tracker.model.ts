export interface TrackerItem {
  id: string,
  location: {
    label: 'Location',
    value: string,
    type: 'text',
    validation: {
      required: true
    }
  },
  createdDate: Date,
}

export const TrackerItemDyn = {
  location: {
    label: 'Location',
    value: 'value',
    type: 'text',
    validation: {
      required: true
    }
  }
}