import science from './sciences'

const Tutors = {
  Mateusz: {
    name: 'Mateusz',
    sciences: [science[0], science[1], science[4]],
    city: 'Warszawa',
    core: 'physics',
    icons: ['otter', 'star'],
  },
  Adrian: {
    name: 'Adrian',
    sciences: [science[0], science[2], science[3]],
    city: 'Kraków',
    icons: ['star'],
  },
  Bartek: {
    name: 'Bartek',
    sciences: [science[0], science[12], science[13]],
    city: 'Warszawa',
    icons: ['star'],
  },
  Michal: {
    name: 'Michał',
    sciences: [science[0], science[1], science[12], science[13]],
    city: 'Rzeszów',
    icons: ['star'],
  },
  Skalniak: {
    name: 'Skalniak',
    sciences: [science[0], science[3], science[13]],
    city: 'Kraków',
    icons: ['star'],
  },

  PatCich: {
    name: 'Patrycja',
    sciences: [science[0], science[7], science[10]],
    city: 'Wrocław',
  },

  // * * //

  None: {
    name: 'Brak',
    sciences: [],
  },
}

export default Tutors

export const TutorsDB = Object.values(Tutors)
