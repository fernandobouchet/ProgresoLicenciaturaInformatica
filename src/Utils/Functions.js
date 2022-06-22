import { MateriasTecnicaturaInformatica } from './TecnicaturaInformatica';
import { MateriasTecnicaturaProgramacion } from './TecnicaturaProgramacion';
import { MateriasTecnicaturaRedes } from './TecnicaturaRedes';

const getCourses = (career) => {
  let coursesArray = [];
  const ca = career.map((careers) => careers.materias);
  ca.forEach((element) => {
    element.forEach((course) => coursesArray.push(course));
  });
  return coursesArray;
};

const getCoursesSimplified = (career) => {
  let coursesArray = [];
  const ca = career?.map((careers) => careers.materias);
  ca?.forEach((element) => {
    element.forEach((course) =>
      coursesArray.push({
        asignatura: course.asignatura,
        estado: course.estado,
        calificacion: course.calificacion,
      })
    );
  });
  return coursesArray;
};

const updateFullCourses = (career, firebaseData) => {
  return career?.map((bloque) => {
    return {
      ...bloque,
      materias: bloque.materias.map((courses) => {
        const savedCourse = firebaseData?.find(
          (course) => course.asignatura === courses.asignatura
        );
        if (
          savedCourse?.estado !== courses?.estado ||
          savedCourse?.calificacion !== courses.calificacion
        ) {
          return {
            ...courses,
            estado: savedCourse.estado,
            calificacion: savedCourse.calificacion,
          };
        }
        return courses;
      }),
    };
  });
};

const getCareer = async (careerName) => {
  if (careerName === 'Tecnicatura en Programación') {
    return MateriasTecnicaturaProgramacion;
  } else if (careerName === 'Tecnicatura en Redes y Operaciones') {
    return MateriasTecnicaturaRedes;
  } else {
    return MateriasTecnicaturaInformatica;
  }
};

const getCoursesSize = (coursesArray) => {
  return getCourses(coursesArray).length;
};

const getStateCourses = (coursesArray, state) => {
  return getCourses(coursesArray).filter((course) => course.estado === state);
};

const getPercentageOfCourses = (coursesArray, state) => {
  let porcentaje =
    (getStateCourses(coursesArray, state).length * 100) /
    getCoursesSize(coursesArray);
  return Math.round(porcentaje * 10) / 10;
};

const getAmountOfCourses = (coursesArray, state) => {
  return getStateCourses(coursesArray, state).length;
};

const getAverageQualification = (coursesArray, state) => {
  let aproved = getStateCourses(coursesArray, state);
  let qualifications = aproved.reduce(
    (x, mat) => x + Number(mat.calificacion),
    0
  );
  let result =
    aproved.length >= 1 ? (qualifications / aproved.length).toFixed(1) : 0;
  return result;
};

function findPendingCorrelatives(career, course) {
  const pendingCorrelativesArray = [];
  if (Object.keys(course).length !== 0) {
    const correlativesArray = course.correlativas;
    career.map((bloque) =>
      bloque.materias.forEach((materia) => {
        if (
          materia.estado !== 'Regularizada' &&
          materia.estado !== 'Aprobada' &&
          correlativesArray.includes(materia.asignatura)
        ) {
          pendingCorrelativesArray.push(materia.asignatura);
        }
      })
    );
  }
  return pendingCorrelativesArray;
}

function itsEquivalent(course) {
  return (
    course === 'Matemática para informática II' ||
    course === 'Programación estructurada' ||
    course === 'Organización de computadoras II'
  );
}

function renameEquivalent(course) {
  let courseName = course;
  if (course === 'Matemática para informática II') {
    courseName = 'Matemática I';
  } else if (course === 'Programación estructurada') {
    courseName = 'Introducción a la programación';
  } else if (course === 'Organización de computadoras II') {
    courseName = 'Organización de computadoras';
  }
  return courseName;
}

function findFirstEquivalent(course) {
  let courseName = course;
  if (course === 'Matemática para informática II') {
    courseName = 'Matemática para informática I';
  } else if (course === 'Programación estructurada') {
    courseName = 'Introducción a lógica y problemas computacionales';
  } else if (course === 'Organización de computadoras II') {
    courseName = 'Organización de computadoras I';
  }
  return courseName;
}

function findCourseNote(career, course) {
  const note = getCoursesSimplified(career).find(
    (materia) => materia.asignatura === course
  );
  return parseInt(note.calificacion);
}

function equivalentAverageNote(career, course, note) {
  let courseNote = parseInt(note);
  let courseEquivalentNote = findCourseNote(
    career,
    findFirstEquivalent(course)
  );
  return (courseNote + courseEquivalentNote) / 2;
}

function itsOptative(course) {
  return course.hasOwnProperty('opciones');
}

export {
  getPercentageOfCourses,
  getAverageQualification,
  getCoursesSimplified,
  getAmountOfCourses,
  findPendingCorrelatives,
  renameEquivalent,
  equivalentAverageNote,
  itsEquivalent,
  itsOptative,
  updateFullCourses,
  getCareer,
};
