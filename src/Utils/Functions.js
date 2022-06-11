const getCourses = (career) => {
  var coursesArray = [];
  const ca = career.map((careers) => careers.materias);
  ca.forEach((element) => {
    element.forEach((course) => coursesArray.push(course));
  });
  return coursesArray;
};

const getCoursesSimplified = (career) => {
  var coursesArray = [];
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

const getCoursesSize = (coursesArray) => {
  return getCourses(coursesArray).length;
};

const getStateCourses = (coursesArray, state) => {
  return getCourses(coursesArray).filter((course) => course.estado === state);
};

const getPercentageOfCourses = (coursesArray, state) => {
  var porcentaje =
    (getStateCourses(coursesArray, state).length * 100) /
    getCoursesSize(coursesArray);
  return Math.round(porcentaje);
};

const getAmountOfCourses = (coursesArray, state) => {
  return `(${getStateCourses(coursesArray, state).length}/${getCoursesSize(
    coursesArray
  )})`;
};

const getAverageQualification = (coursesArray, state) => {
  var aproved = getStateCourses(coursesArray, state);
  var qualifications = aproved.reduce(
    (x, mat) => x + Number(mat.calificacion),
    0
  );
  var result =
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
  var courseName = course;
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
  var courseName = course;
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
  var courseNote = parseInt(note);
  var courseEquivalentNote = findCourseNote(
    career,
    findFirstEquivalent(course)
  );
  return (courseNote + courseEquivalentNote) / 2;
}

function itsOptative(course) {
  return course.hasOwnProperty('opciones');
}

function courseHasChanged(course1, course2) {
  return (
    course1.asignatura === course2.asignatura &&
    course1.estado === course2.estado &&
    course1.calificacion === course2.calificacion
  );
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
  courseHasChanged,
};
