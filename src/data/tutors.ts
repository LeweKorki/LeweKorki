import science from './sciences'

import { Tutor } from '@/types/user'

const aboutme = [
  ' Mój stary to fanatyk wędkarstwa. Pół mieszkania zajebane wędkami, najgorzej. Średnio raz w miesiącu ktoś wdepnie w leżący na ziemi haczyk czy kotwicę i trzeba wyciągać w szpitalu, bo mają zadziory na końcu. W swoim dwudziestodwuletnim życiu już z 10 razy byłem na takim zabiegu. Tydzień temu poszedłem na jakieś losowe badania, to baba z recepcji jak mnie tylko zobaczyła, to kazała buta ściągać xD, bo myślała, że znowu hak w nodze.',
  'Druga połowa mieszkania zajebana „Wędkarzem Polskim”, „Światem Wędkarza”, „Super Karpiem” xD itp. Co tydzień ojciec robi objazd po wszystkich kioskach w mieście, żeby skompletować wszystkie wędkarskie tygodniki. Byłem na tyle głupi, że nauczyłem go into internety, bo myślałem, że trochę pieniędzy zaoszczędzimy na tych gazetkach, ale teraz nie dosyć, że je kupuje, to jeszcze siedzi na jakichś forach dla wędkarzy i kręci gównoburze z innymi wędkarzami o najlepsze zanęty itp. Potrafi drzeć mordę do monitora albo wypierdolić klawiaturę za okno. Kiedyś ojciec mnie wkurwił, to założyłem tam konto i go trollowałem, pisząc w jego tematach jakieś losowe głupoty, typu „karasie jedzo guwno”. Matka nie nadążała z gotowaniem bigosu na uspokojenie. Aha, ma już na forum rangę SUM, za najebanie 10 tysięcy postów.      ',
  'Jak jest ciepło, to co weekend zapierdala na ryby. Od jakichś pięciu lat w każdą niedzielę jem rybę na obiad, a ojciec pierdoli o zaletach jedzenia tego wodnego gówna. Jak się dostałem na studia, to stary przez tydzień pierdolił, że to dzięki temu, że jem dużo ryb, bo zawierają fosfor i mózg mi lepiej pracuje.',
]

const Tutors: { [key: string]: Tutor } = {
  Mateusz: {
    name: 'Mateusz',
    fullname: 'Mateusz Słotwiński',
    degree: 'dr inż. huj.',
    city: 'Warszawa',
    majors: [
      {
        name: 'Fizyka Techniczna',
        since: '2023 - obecnie',
        university: 'Politechnika Warszawska',
        img: 'physics',
        spec: 'Fizyka jądrowa, kwantowa i komputerowa',
      },
      // {
      //   name: 'Elektronika',
      //   since: '2023 - obecnie',
      //   university: 'Politechnika Warszawska',
      //   img: 'electronics',
      // },
    ],
    sciences: [science[0], science[1], science[4]],
    contact: {
      // fb: '...',
      email: 'mateusz@lewekorki.pl',
    },
    icons: ['otter', 'star'],
    aboutme,
  },
  Adrian: {
    name: 'Adrian',
    fullname: 'Adrian Nowicki',
    degree: '',
    city: 'Kraków',
    majors: [
      {
        name: 'Bioinformatyka',
        since: '2023 - obecnie',
        university: 'Uniwersytet Jagielloński',
        img: 'bioinformatics',
        // spec: 'Fizyka jądrowa, kwantowa i komputerowa',
      },
    ],
    contact: {
      // fb: '...',
      email: 'mateusz@lewekorki.pl',
    },
    sciences: [science[0], science[2], science[3]],
    icons: ['star'],
    aboutme,
  },
  Bartek: {
    name: 'Bartek',
    fullname: 'Bartek Morawski',
    degree: '',
    sciences: [science[0], science[12], science[13]],
    city: 'Warszawa',
    majors: [
      {
        name: 'Transport',
        since: '2023 - obecnie',
        university: 'Politechnika Warszawska',
        img: 'transport',
        spec: 'Logistyka',
      },
    ],
    contact: {
      // fb: '...',
      email: 'mateusz@lewekorki.pl',
    },
    icons: ['star'],
    aboutme,
  },
  Michal: {
    name: 'Michał',
    fullname: 'Michał Homa',
    degree: '',
    sciences: [science[0], science[1], science[12], science[13]],
    city: 'Rzeszów',
    majors: [
      {
        name: 'Lotnictwo i Kosmonautyka',
        since: '2023 - obecnie',
        university: 'Politechnika Rzeszowska',
        img: 'aircraft',
        // spec: 'Aircraft',
      },
    ],
    contact: {
      // fb: '...',
      email: 'mateusz@lewekorki.pl',
    },
    icons: ['star'],
    aboutme,
  },
  Skalniak: {
    name: 'Skalniak',
    fullname: 'Kuba Kamiński',
    degree: '',
    sciences: [science[0], science[3], science[13]],
    city: 'Kraków',
    majors: [
      {
        name: 'Informatyka i Ekonometria',
        since: '2023 - obecnie',
        university: 'Akademia Górniczo-Hutnicza',
        img: 'econometrics',
        // spec: 'Fizyka jądrowa, kwantowa i komputerowa',
      },
    ],
    contact: {
      // fb: '...',
      email: 'mateusz@lewekorki.pl',
    },
    icons: ['star'],
    aboutme,
  },

  // * * //

  PatCich: {
    name: 'Patrycja',
    fullname: 'Kuba Kamiński',
    degree: '',
    sciences: [science[0], science[7], science[10]],
    city: 'Wrocław',
    majors: [
      {
        name: 'Finanse i Rachunkowość',
        since: '2023 - obecnie',
        university: 'Uniwersytet Ekonomiczny we Wrocławiu',
        img: 'pp',
      },
    ],
    contact: {
      email: 'patcich@lewekorki.pl',
    },
    icons: [],
    aboutme,
  },

  // * * //
}

export default Tutors

export const TutorsDB = Object.values(Tutors)
