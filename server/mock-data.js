const generate = ({size=5, gen}) => {
  return Array.from(Array(size)).map((_, i) => {
    return gen(i);
  });
}

const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

const getRandomFromArray = (myArray, exceptIndexes=[]) => {
  let index = getRandomIndex(myArray);
  while (exceptIndexes.indexOf(index) > -1) {
    index = getRandomIndex(myArray);
  }
  return {
    item: myArray[index],
    index
  };
};

export const users = generate({gen: i => {
    return {
      id: i.toString(),
      name: 'Test user ' + i,
    }
  }
});

export const meetings = generate({
  size: 30,
  gen: i => {
    const {item, index} = getRandomFromArray(users);
    const location = 'Street number ' + i;
    return {
      id: i.toString(),
      name: 'Meeting about number ' + i,
      creator: item,
      users: [item, getRandomFromArray(users, [index])],
      location,
      possibleLocations: [location, 'Another street number ' + i]
    }
  }
});
