const getAPI = async (type) => {
  const url = `https://swapi.co/api/${type}/`;
  const datas = await parseFunc(url);
  let answer;

  switch (type) {
  case 'films': answer = cleanOpeningScroll(datas);
    break;
  case 'people': answer = cleanPeople(datas);
    break;
  case 'planets': answer = cleanPlanets(datas);
    break;
  case 'vehicles': answer = cleanVehicles(datas);
  }
  return answer;
};

const parseFunc = async (url) => {
  try {
    const response = await fetch(url);
    let datas = await response.json();
    return datas;
  } catch (error) {
    throw (new Error('Was not able to get datas'));
  }
};

const cleanOpeningScroll = async (datas) => {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  const film = datas.results[randomNumber];
  return ({
    text: film.opening_crawl,
    title: film.title,
    date: film.release_date
  });
};

const cleanPeople = async (datas) => {
  const promises = datas.results.map(async(person) => {
    const name = person.name;
    const homeworld = await getHomeWorld(person.homeworld);
    const species = await getSpecies(person.species);
    return {name, ...homeworld, species, isActive: false};
  });
  return await Promise.all(promises);
};

const getHomeWorld = async (homeworld) => {
  const datas = await parseFunc(homeworld);
  const homeworldObj = ({planetName: datas.name, population: datas.population});
  return Promise.resolve(homeworldObj);
};

const getSpecies = async (species) => {
  const datas = await parseFunc(species);
  return Promise.resolve(datas.name);
};

const cleanPlanets = async (datas) => {
  const promises = datas.results.map(async(planet) => {
    const {name, terrain, population, climate} = planet;
    const residents = planet.residents.length > 0 ? await getResidents(planet.residents) : 'No Residents';
    return ({name, terrain, population, climate, residents, isActive: false});
  });
  return Promise.all(promises);
};

const getResidents = (residentsAPIs) => {
  const allResidents = residentsAPIs.map(async(residentAPI) => {
    const resident = await parseFunc(residentAPI);
    return `${resident.name + ', '}`;
  });
  return Promise.all(allResidents);
};

const cleanVehicles = async (datas) => {
  const promises = datas.results.map(async(vehicle) => {
    const {name, model, passengers, vehicle_class} = vehicle;
    return ({name, model, passengers, vehicle_class, isActive: false});
  });
  return Promise.all(promises);
};

export {
  getAPI,
  parseFunc,
  cleanOpeningScroll,
  cleanPeople,
  getHomeWorld,
  getSpecies,
  cleanPlanets,
  getResidents,
  cleanVehicles
};

