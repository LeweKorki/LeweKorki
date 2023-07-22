import science from './sciences'

export default {
  Mateusz: {
    name: 'Mateusz',
    sciences: [science[0], science[1], science[4]],
    core: 'physics',
    founder: true,
  },
  Bartek: {
    name: 'Bartek',
    sciences: [science[0], science[5], science[6]],
    founder: true,
  },
  Adrian: {
    name: 'Adrian',
    sciences: [science[0], science[2], science[3], science[4]],
    founder: true,
  },
  Skalniak: {
    name: 'Skalniak',
    sciences: [science[4], science[7], science[8]],
    founder: true,
  },
  Michal: {
    name: 'Michał',
    sciences: [science[0], science[1], science[5]],
    founder: true,
  },
  // * * //
  None: {
    name: 'Brak',
    sciences: [],
  },
}
