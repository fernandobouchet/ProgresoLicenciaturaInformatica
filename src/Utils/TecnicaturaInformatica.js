export const MateriasTecnicaturaInformatica = [
  {
    cuatrimestre: 'Primer',
    materias: [
      {
        asignatura: 'Matemática I',
        area: 'CB',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: [],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Introducción a la Programación',
        area: 'AyL',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: [],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Organización de computadoras',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Nuevos entornos y lenguajes',
        area: 'Gral.',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
      },
    ],
  },
  {
    cuatrimestre: 'Segundo',
    materias: [
      {
        asignatura: 'Estructuras de Datos',
        area: 'TC',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: ['Introducción a la Programación'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Programación con Objetos I',
        area: 'AyL',
        hsSemanales: '8',
        cargaHorariaTotal: '128',
        correlativas: ['Introducción a la Programación'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Bases de Datos',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Matemática I'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Inglés I',
        area: 'Gral.',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
      },
    ],
  },
  {
    cuatrimestre: 'Tercer',
    materias: [
      {
        asignatura: 'Matemática II',
        area: 'CB',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Matemática I'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Programación con Objetos II',
        area: 'AyL',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con Objetos I'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Redes de Computadoras',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Organización de Computadoras'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Sistemas Operativos',
        area: 'ASOyR',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Organización de Computadoras',
          'Introducción a la Programación',
        ],
        estado: 'Pendiente',
      },
    ],
  },
  {
    cuatrimestre: 'Cuarto',
    materias: [
      {
        asignatura: 'Construcción de Interfaces de Usuario',
        area: 'ISBDySI.',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación de objetos II'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Programación Concurrente',
        area: 'AyL',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Estructuras de Datos'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Estrategias de Persistencia',
        area: 'ISBDySI.',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con Objetos II', 'Bases de Datos'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Elementos de Ingeniería de Software',
        area: 'ISBDySI.',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: ['Programación con Objetos II'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Inglés II',
        area: 'Gral.',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: ['Inglés I'],
        estado: 'Pendiente',
      },
    ],
  },
  {
    cuatrimestre: 'Quinto',
    materias: [
      {
        asignatura: 'Programación Funcional',
        area: 'AyL',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Estructuras de Datos'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Laboratorio de Sistemas Operativos y Redes',
        area: 'ASOyR',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: ['Redes de Computadoras', 'Sistemas Operativos'],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Desarrollo de Aplicaciones',
        area: 'ISBDySI',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Construcción de Interfaces de Usuario',
          'Estrategias de Persistencia',
          'Elementos de Ingeniería de Software',
          'Matemática II',
        ],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Complementaria',
        area: 'Compl.',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [
          'Programación de objetos II',
          'Elementos de Ingeniería de Software',
          'Programación Concurrente',
        ],
        estado: 'Pendiente',
      },
    ],
  },
  {
    cuatrimestre: 'Sexto',
    materias: [
      {
        asignatura: 'Práctica Profesional Supervisada',
        area: '',
        hsSemanales: '6',
        cargaHorariaTotal: '96',
        correlativas: [
          'Desarrollo de Aplicaciones',
          'Programación Funcional',
          'Programación Concurrente',
          'Laboratorio de Sistemas',
          'Operativos y Redes',
        ],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Materia UNAHUR',
        area: 'Gral.',
        hsSemanales: '2',
        cargaHorariaTotal: '32',
        correlativas: [],
        estado: 'Pendiente',
      },
      {
        asignatura: 'Complementaria',
        area: 'Compl.',
        hsSemanales: '4',
        cargaHorariaTotal: '64',
        correlativas: [
          'Programación con Objetos II',
          'Elementos de Ingeniería de Software',
          'Programación Concurrente',
        ],
        estado: 'Pendiente',
      },
    ],
  },
];
