const capitalise = (str) => {
  const arr = str.split('');
  arr[0] = arr[0].toUpperCase();;
  return arr.join('');
};

/**
 * Returns an array of all astronauts with their duty status and normalised names.
 */
const astronautRoster = (active, inactive, trainees) => {
  active = active.map(astronaut => {
    return `${capitalise(astronaut.name)} - ACTIVE`
  });

  inactive = inactive.map(astronaut => {
    return `${capitalise(astronaut.name)} - INACTIVE`
  });

  trainees = trainees.map(astronaut => {
    return `${capitalise(astronaut.name)} - TRAINEE`
  });

  return active + inactive + trainees;
};

const roster = astronautRoster(
  [{name: 'alice'}],
  [{name: 'bob'}],
  [{name: 'jim'}],
);

// What's wrong with this picture?
console.log(roster);
