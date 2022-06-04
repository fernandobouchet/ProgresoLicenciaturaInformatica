const getCourses = (career) => {
  var coursesArray = [];
  const ca = career.map((careers) => careers.materias);
  ca.forEach((element) => {
    element.forEach((course) => coursesArray.push(course));
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

export { getPercentageOfCourses, getAverageQualification };
