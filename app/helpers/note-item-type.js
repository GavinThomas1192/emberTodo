import { helper } from '@ember/component/helper';

const outdoorNoteTypes = [
  'Hiking',
  'Fishing',
  'Camping'
];

export function noteItemType([noteType]) {
  if (outdoorNoteTypes.includes(noteType)) {
    return 'Outdoor';
  }
  return 'Indoor'
}

export default helper(noteItemType);
