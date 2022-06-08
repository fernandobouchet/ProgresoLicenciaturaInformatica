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

export {
  getPercentageOfCourses,
  getAverageQualification,
  getCoursesSimplified,
  getAmountOfCourses,
  findPendingCorrelatives,
};
