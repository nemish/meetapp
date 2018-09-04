const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque justo vitae nisl porta, vel feugiat nunc faucibus. Maecenas ligula justo, facilisis et condimentum quis, lobortis non mi. Nullam sollicitudin viverra maximus. Pellentesque vitae gravida mauris. In hac habitasse platea dictumst. Nulla sollicitudin quam lacus. Maecenas lacinia porttitor erat et vulputate. Nam ut rutrum urna. Curabitur sapien nibh, placerat non dui eu, venenatis laoreet sapien. Praesent nunc turpis, blandit sit amet pretium eu, consectetur convallis nibh. Praesent neque ante, varius convallis est at, vestibulum congue leo. Fusce faucibus velit eu est fermentum fermentum. Ut a nibh posuere, egestas nisl quis, pulvinar dolor. Aenean et lacus tempor, lacinia nulla et, eleifend augue. Fusce scelerisque auctor maximus. Donec rutrum, ipsum id congue congue, enim nisi sagittis nibh, a sagittis purus ex et velit. Cras quis blandit risus, eu aliquet urna. Suspendisse quis placerat orci, vel viverra massa. Sed placerat ex eget risus gravida, cursus maximus risus venenatis. Maecenas hendrerit finibus neque. Suspendisse volutpat orci libero, a lacinia dui auctor ac. Nunc eu nulla interdum, pulvinar tellus sit amet, pretium urna. Sed non ipsum eu mi finibus eleifend. Suspendisse dignissim odio sapien, eget tincidunt nisl congue vitae. Mauris consectetur dictum lectus, ac posuere est condimentum vel. Maecenas semper sem ante, vel rhoncus est tristique nec. Cras sodales lorem eu nibh malesuada pellentesque. Curabitur cursus libero vitae ullamcorper scelerisque. Nulla blandit cursus sem, non vehicula est molestie quis. Nunc lacus nunc, vulputate ac posuere et, ultrices sit amet magna. Donec vitae lacus consectetur, cursus turpis vel, pellentesque ligula. Proin finibus quis eros ut tincidunt. In vitae condimentum ex. Nullam tristique non velit vitae luctus. Ut velit erat, accumsan vitae metus sed, imperdiet facilisis tellus. Nunc vehicula purus eget porttitor vehicula. Proin ut malesuada lorem. Cras tincidunt dignissim nulla a vulputate. Sed tempus leo et magna blandit, eu scelerisque ipsum pulvinar. Duis consectetur tortor nec commodo hendrerit. Etiam ante quam, tempor eget nisi non, laoreet vehicula enim. Ut dapibus lacinia sapien at vulputate. Integer sed neque ligula. Nullam nec ultrices purus. Aliquam id mattis nisl, ultrices ultrices metus. Sed eu ornare elit. Nunc eu vehicula leo. Pellentesque aliquam lectus sem, ac porta ligula tincidunt vulputate. Curabitur cursus justo quis sem condimentum venenatis. Aenean at nulla ac enim pharetra viverra. Sed ut lectus porta, scelerisque urna vitae, tincidunt tellus. Phasellus a aliquet mi. Praesent accumsan ultricies nunc, eget faucibus nisl congue nec. Nunc vitae ipsum eros. Donec tempus lacinia nulla vitae condimentum. Donec et semper neque. Nulla facilisi. Fusce volutpat bibendum libero. Maecenas pharetra tempus diam vel vehicula. Praesent dapibus sollicitudin fringilla. Vivamus accumsan id leo at scelerisque. Donec vitae mattis lorem. Suspendisse sagittis urna sed dictum auctor.";

const generate = ({ size = 5, gen }) => {
  return Array.from(Array(size)).map((_, i) => {
    return gen(i);
  });
};
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomFromArray = (myArray, exceptIndexes = []) => {
  let index = getRandomIndex(myArray);
  while (exceptIndexes.indexOf(index) > -1) {
    index = getRandomIndex(myArray);
  }
  return {
    item: myArray[index],
    index
  };
};

export const users = generate({
  gen: (i) => {
    return {
      id: i.toString(),
      name: "Test user " + i
    };
  }
});

export const meetings = generate({
  size: 30,
  gen: (i) => {
    const { item, index } = getRandomFromArray(users);
    const location = "Street number " + i;
    const textStart = i + getRandomInt(0, 500);
    const symbolsCount = getRandomInt(50, 100);
    const name = TEXT.substr(textStart, symbolsCount);
    console.log("name", name, textStart, symbolsCount);
    const description = TEXT.substr(
      textStart + getRandomInt(30, 50),
      textStart + getRandomInt(100, 200)
    );
    console.log("name", name, textStart, symbolsCount);
    return {
      name,
      description,
      id: i.toString(),
      creator: item,
      users: [item, getRandomFromArray(users, [index])],
      location,
      possibleLocations: [location, "Another street number " + i]
    };
  }
});
