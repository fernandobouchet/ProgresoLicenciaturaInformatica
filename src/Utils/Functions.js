const SaveCareer = (career, careerName) => {
  localStorage.setItem('career', JSON.stringify(career));
  localStorage.setItem('careerName', JSON.stringify(careerName));
};

const LoadCareers = () => {
  let savedCareerList = localStorage.getItem('career');
  if (savedCareerList !== null) {
    let result = JSON.parse(savedCareerList);
    return result;
  } else return null;
};

const LoadCareerName = () => {
  let savedCareerName = localStorage.getItem('careerName');
  if (savedCareerName !== null) {
    let result = JSON.parse(savedCareerName);
    return result;
  } else return '';
};

export { SaveCareer, LoadCareers, LoadCareerName };
