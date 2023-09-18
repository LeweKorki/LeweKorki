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
    desc: 'Kurs do matury z matematyki rozszerzonej. Składa się 10 działów podzielonych na wykłady i ćwiczenia. Wykłady (30h) służom przypomnieniu i utrwaleniu teorii oraz zaprezentowaniu jej praktycznego użycia. Ćwiczenia (36h) służą natomiast obszernemu przestawieniu najważniejszych typów zadań, które należy znać przystępując do matury. Kurs przedstawiony jest w oparciu o najnowszy materiał dotyczący podstawy programowej.',
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
