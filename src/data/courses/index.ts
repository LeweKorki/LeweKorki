import Tutors from '../tutors'
import Content from './plans'

export default [
  {
    title: 'Matematyka',
    level: 'Poziom Rozszerzony',
    id: 'math_pr',
    prices: [99.99, 499.99, 799.99],
    authors: [Tutors.Mateusz, Tutors.Bartek],
    content: Content.MathPR,
  },
  // {
  //   title: 'Matematyka',
  //   level: 'Poziom Podstawowy',
  //   id: 'math_pp',
  //   prices: [99.99, 499.99, 799.99],
  //   authors: [Tutors.Mateusz, Tutors.Bartek],
  //   content: Content.MathPR,
  // },
  // {
  //   title: 'Matematyka',
  //   level: 'Poziom Wykurwisty',
  //   id: 'math_pj',
  //   prices: [99.99, 499.99, 799.99],
  //   authors: [Tutors.Mateusz, Tutors.Bartek],
  //   content: Content.MathPR,
  // },
]
