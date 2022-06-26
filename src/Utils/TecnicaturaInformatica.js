export const MateriasTecnicaturaInformatica = [
  {
    bloque: 'Primer Cuatrimestre',
    id: 1,
    materias: [
      {
        id: 1,
        asignatura: 'Matemática I',
        area: 'CB',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 2,
        asignatura: 'Introducción a la programación',
        area: 'AyL',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 3,
        asignatura: 'Organización de computadoras',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 4,
        asignatura: 'Nuevos entornos y lenguajes',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: '',
      },
    ],
  },
  {
    bloque: 'Segundo Cuatrimestre',
    id: 2,
    materias: [
      {
        id: 5,
        asignatura: 'Estructuras de datos',
        area: 'TC',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: ['Introducción a la programación'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 6,
        asignatura: 'Programación con Objetos I',
        area: 'AyL',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: ['Introducción a la programación'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 7,
        asignatura: 'Bases de datos',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Matemática I'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 8,
        asignatura: 'Inglés I',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: '',
      },
    ],
  },
  {
    bloque: 'Tercer Cuatrimestre',
    id: 3,
    materias: [
      {
        id: 9,
        asignatura: 'Matemática II',
        area: 'CB',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Matemática I'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 10,
        asignatura: 'Programación con Objetos II',
        area: 'AyL',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con Objetos I'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 11,
        asignatura: 'Redes de computadoras',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Organización de computadoras'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 12,
        asignatura: 'Sistemas operativos',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Organización de computadoras',
          'Introducción a la programación',
        ],
        estado: 'Pendiente',
        calificacion: '',
      },
    ],
  },
  {
    bloque: 'Cuarto Cuatrimestre',
    id: 4,
    materias: [
      {
        id: 13,
        asignatura: 'Construcción de interfaces de usuario',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con objetos II'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 14,
        asignatura: 'Programación concurrente',
        area: 'AyL',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Estructuras de datos'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 15,
        asignatura: 'Estrategias de persistencia',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con objetos II', 'Bases de datos'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 16,
        asignatura: 'Elementos de ingeniería de software',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con objetos II'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 17,
        asignatura: 'Inglés II',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: ['Inglés I'],
        estado: 'Pendiente',
        calificacion: '',
      },
    ],
  },
  {
    bloque: 'Quinto Cuatrimestre',
    id: 5,
    materias: [
      {
        id: 18,
        asignatura: 'Programación funcional',
        area: 'AyL',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Estructuras de datos'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 19,
        asignatura: 'Laboratorio de sistemas operativos y redes',
        area: 'ASOyR',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Redes de computadoras', 'Sistemas operativos'],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 20,
        asignatura: 'Desarrollo de aplicaciones',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Construcción de interfaces de usuario',
          'Estrategias de persistencia',
          'Elementos de ingeniería de software',
          'Matemática II',
        ],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 21,
        asignatura: 'Electiva I',
        area: 'Compl',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        opciones: [
          'Bases de datos II',
          'Participación y gestión en proyectos de software libre',
          'Introducción a la bioinformática',
          'Políticas públicas en la sociedad de la información y la era digital',
          'Sistemas de la información geográfica',
          'Herramientas declarativas en programación',
          'Introducción al desarrollo de videojuegos',
          'Derechos de autor y derecho de copia en la era digital',
          'Análisis estático de programas y herramientas asociadas',
          'Seminarios',
          'Semántica de lenguajes de programación',
          'Seminarios sobre herramientas o técnicas puntuales',
        ],
        correlativas: [
          'Programación con objetos II',
          'Elementos de ingeniería de software',
          'Programación concurrente',
        ],
        estado: 'Pendiente',
        calificacion: '',
      },
    ],
  },
  {
    bloque: 'Sexto Cuatrimestre',
    id: 6,
    materias: [
      {
        id: 22,
        asignatura: 'Práctica profesional supervisada',
        area: '',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Desarrollo de aplicaciones',
          'Programación funcional',
          'Programación concurrente',
          'Laboratorio de sistemas',
          'Operativos y redes',
        ],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 23,
        asignatura: 'Materia UNAHUR',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: '',
      },
      {
        id: 24,
        asignatura: 'Electiva II',
        area: 'Compl',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        opciones: [
          'Bases de datos II',
          'Participación y gestión en proyectos de software libre',
          'Introducción a la bioinformática',
          'Políticas públicas en la sociedad de la información y la era digital',
          'Sistemas de la información geográfica',
          'Herramientas declarativas en programación',
          'Introducción al desarrollo de videojuegos',
          'Derechos de autor y derecho de copia en la era digital',
          'Análisis estático de programas y herramientas asociadas',
          'Seminarios',
          'Semántica de lenguajes de programación',
          'Seminarios sobre herramientas o técnicas puntuales',
        ],
        correlativas: [
          'Programación con objetos II',
          'Elementos de ingeniería de software',
          'Programación concurrente',
        ],
        estado: 'Pendiente',
        calificacion: '',
      },
    ],
  },
];
