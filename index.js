// O(m + n) TIME where n is the letters in the note
// O(m) SPACE where m is the letters in the mag

const buildHistogram = magazine => {
  const histogram = {};
  for (let letter of magazine) {
    if (letter in histogram) {
      histogram[letter] += 1;
    } else {
      histogram[letter] = 1;
    }
  }
  return histogram;
};

const canBuildNote = (magazine, note) => {
  const mag = buildHistogram(magazine);

  for (let letter of note) {
    if (letter in mag) {
      if (mag[letter] === 0) {
        return false;
      } else {
        mag[letter] -= 1;
      }
    } else {
      return false;
    }
  }
  return true;
};
