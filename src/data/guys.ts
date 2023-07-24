import science from './sciences'

const Tutors = {
  Mateusz: {
    name: 'Mateusz',
    sciences: [science[0], science[1], science[4]],
    city: 'Warszawa',
    core: 'physics',
    founder: true,
  },
  Adrian: {
    name: 'Adrian',
    sciences: [science[0], science[2], science[3], science[4]],
    city: 'Kraków',
    founder: true,
  },
  Bartek: {
    name: 'Bartek',
    sciences: [science[0], science[5], science[6]],
    city: 'Warszawa',
    founder: true,
  },
  Michal: {
    name: 'Michał',
    sciences: [science[0], science[1], science[5]],
    city: 'Rzeszów',
    founder: true,
  },
  Skalniak: {
    name: 'Skalniak',
    sciences: [science[4], science[7], science[8]],
    city: 'Kraków',
    founder: true,
  },

  // * * //

  None: {
    name: 'Brak',
    sciences: [],
  },
}

export default Tutors

export const TutorsDB = Object.values(Tutors)
