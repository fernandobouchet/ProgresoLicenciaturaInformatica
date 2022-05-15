export const MateriasTecnicaturaRedes = [
  {
    redes: [
      {
        cuatrimestre: 'Primer',
        materias: [
          {
            asignatura: 'Matemática para Informática I',
            area: 'CB',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: [],
          },
          {
            asignatura: 'Introducción a lógica y problemas computacionales',
            area: 'AyL',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: [],
          },
          {
            asignatura: 'Organización de computadoras I',
            area: 'ASOyR',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: [],
          },
          {
            asignatura: 'Nuevos entornos y lenguajes',
            area: 'Gral.',
            hsSemanales: '2',
            cargaHorariaTotal: '32',
            correlativas: [],
          },
        ],
      },
      {
        cuatrimestre: 'Segundo',
        materias: [
          {
            asignatura: 'Taller de intérpretes de comandos',
            area: 'AyL',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: ['Introducción a lógica y problemas computacionales'],
          },
          {
            asignatura: 'Organización de computadoras II',
            area: 'ASOyR',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: ['Organización de computadoras I'],
          },
          {
            asignatura: 'Sistemas de comunicación',
            area: 'ASOyR',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: ['Organización de computadoras I'],
          },
          {
            asignatura: 'Inglés I',
            area: 'Gral.',
            hsSemanales: '2',
            cargaHorariaTotal: '32',
            correlativas: [],
          },
        ],
      },
      {
        cuatrimestre: 'Tercer',
        materias: [
          {
            asignatura: 'Bases de Datos',
            area: 'ISBDySI',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: ['Matemática para informática I'],
          },
          {
            asignatura: 'Redes de Computadoras',
            area: 'ASOyR',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: [
              'Organización de computadoras II',
              'Sistemas de comunicación',
            ],
          },
          {
            asignatura: 'Sistemas Operativos',
            area: 'ASOyR',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: [
              'Taller de intérpretes de comandos',
              'Organización de computadoras II',
            ],
          },
          {
            asignatura: 'Operaciones I',
            area: 'TC',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: ['Taller de intérpretes de comandos'],
          },
        ],
      },
      {
        cuatrimestre: 'Cuarto',
        materias: [
          {
            asignatura: 'Materia UNAHUR',
            area: 'Gral.',
            hsSemanales: '2',
            cargaHorariaTotal: '32',
            correlativas: [],
          },
          {
            asignatura: 'Redes avanzadas',
            area: 'ASOyR',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: ['Redes de computadoras'],
          },
          {
            asignatura: 'Electiva I',
            area: 'Elec.',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: [
              'Organización de computadoras II',
              'Sistemas comunicación',
            ],
          },
          {
            asignatura: 'Electiva II',
            area: 'Elec.',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: [
              'Matemática para Informática I',
              'Taller de intérpretes de comandos',
            ],
          },
          {
            asignatura: 'Inglés II',
            area: 'Gral.',
            hsSemanales: '2',
            cargaHorariaTotal: '32',
            correlativas: ['Inglés I'],
          },
        ],
      },
      {
        cuatrimestre: 'Quinto',
        materias: [
          {
            asignatura: 'Seguridad de la Información',
            area: 'ASOyR',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: ['Redes avanzadas', 'Operaciones I'],
          },
          {
            asignatura: 'Laboratorio de sistemas operativos y redes',
            area: 'ASOyR',
            hsSemanales: '4',
            cargaHorariaTotal: '64',
            correlativas: ['Redes de computadoras', 'Sistemas operativos'],
          },
          {
            asignatura: 'Operaciones II',
            area: 'TC',
            hsSemanales: '6',
            cargaHorariaTotal: '96',
            correlativas: ['Operaciones I', 'Sistemas operativos'],
          },
        ],
      },
    ],
  },
];
