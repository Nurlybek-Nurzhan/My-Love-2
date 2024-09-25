let randomSet = new Set();

function getRandomIntInclusive(min, max) {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomSet.has(num));
  randomSet.add(num);
  if (randomSet.size === max - min + 1) {
    randomSet.clear();
  }
  return num;
}
