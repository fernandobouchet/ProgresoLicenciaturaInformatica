const SaveData = (career, degree, careerName) => {
  localStorage.setItem('career', JSON.stringify(career));
  localStorage.setItem('degree', JSON.stringify(degree));
  localStorage.setItem('careerName', JSON.stringify(careerName));
};

const LoadCareers = () => {
  let savedCareerList = localStorage.getItem('career');
  if (savedCareerList !== null) {
    let result = JSON.parse(savedCareerList);
    return result;
  } else return null;
};

const LoadDegree = () => {
  let savedDegreeList = localStorage.getItem('degree');
  if (savedDegreeList !== null) {
    let result = JSON.parse(savedDegreeList);
    return result;
  } else return '';
};

const LoadCareerName = () => {
  let savedCareerName = localStorage.getItem('careerName');
  if (savedCareerName !== null) {
    let result = JSON.parse(savedCareerName);
    return result;
  } else return '';
};

export { SaveData, LoadCareers, LoadDegree, LoadCareerName };
