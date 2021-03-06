export const MateriasTecnicaturaRedes = [
  {
    bloque: '1er',
    id: 1,
    materias: [
      {
        id: 1,
        asignatura: 'Matemática para informática I',
        area: 'CB',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 2,
        asignatura: 'Introducción a lógica y problemas computacionales',
        area: 'AyL',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 3,
        asignatura: 'Organización de computadoras I',
        area: 'ASOyR',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 4,
        asignatura: 'Nuevos entornos y lenguajes',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: null,
      },
    ],
  },
  {
    bloque: '2do',
    id: 2,
    materias: [
      {
        id: 5,
        asignatura: 'Taller de intérpretes de comandos',
        area: 'AyL',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Introducción a lógica y problemas computacionales'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 6,
        asignatura: 'Organización de computadoras II',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Organización de computadoras I'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 7,
        asignatura: 'Sistemas de comunicación',
        area: 'ASOyR',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Organización de computadoras I'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 8,
        asignatura: 'Inglés I',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: null,
      },
    ],
  },
  {
    bloque: '3er',
    id: 3,
    materias: [
      {
        id: 9,
        asignatura: 'Bases de datos',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Matemática para informática I'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 10,
        asignatura: 'Redes de computadoras',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Organización de computadoras II',
          'Sistemas de comunicación',
        ],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 11,
        asignatura: 'Sistemas operativos',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Taller de intérpretes de comandos',
          'Organización de computadoras II',
        ],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 12,
        asignatura: 'Operaciones I',
        area: 'TC',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Taller de intérpretes de comandos'],
        estado: 'Pendiente',
        calificacion: null,
      },
    ],
  },
  {
    bloque: '4to',
    id: 4,
    materias: [
      {
        id: 13,
        asignatura: 'Materia UNAHUR',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 14,
        asignatura: 'Redes avanzadas',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Redes de computadoras'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 15,
        asignatura: 'Electiva I',
        opciones: ['Matemática para informática II'],
        area: 'Elec',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [
          'Organización de computadoras II',
          'Sistemas comunicación',
        ],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 16,
        asignatura: 'Electiva II',
        opciones: [
          'Programación estructurada',
          'Programación concurrente',
          'Estructuras de datos',
        ],
        area: 'Elec',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [
          'Matemática para informática I',
          'Taller de intérpretes de comandos',
        ],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 17,
        asignatura: 'Inglés II',
        area: 'Gral',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: ['Inglés I'],
        estado: 'Pendiente',
        calificacion: null,
      },
    ],
  },
  {
    bloque: '5to',
    id: 5,
    materias: [
      {
        id: 18,
        asignatura: 'Seguridad de la información',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Redes avanzadas', 'Operaciones I'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 19,
        asignatura: 'Laboratorio de sistemas operativos y redes',
        area: 'ASOyR',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Redes de computadoras', 'Sistemas operativos'],
        estado: 'Pendiente',
        calificacion: null,
      },
      {
        id: 20,
        asignatura: 'Operaciones II',
        area: 'TC',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Operaciones I', 'Sistemas operativos'],
        estado: 'Pendiente',
        calificacion: null,
      },
    ],
  },
];
