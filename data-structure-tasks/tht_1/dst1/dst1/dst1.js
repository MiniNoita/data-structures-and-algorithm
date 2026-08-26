function setScore(scores, newscore) {
  // put a new score into the score array
  scores.push(newscore);
}

function getScores(scores) {
  return scores;
}

function latest(scores) {
  return scores[scores.length - 1];
}

function highest(scores) {
  return Math.max(...scores);
}

function topThree(scores) {
  const sortedScores = scores.toSorted((a, b) => b - a);
  return sortedScores.slice(0, 3);
}

const newArray = [3, 10, 2, 50, 32, 21];
console.log(getScores(newArray));

setScore(newArray, 45);
console.log(getScores(newArray));

console.log(`this is the latest score: ${latest(newArray)}`);

console.log(`This is the best score so far: ${highest(newArray)}`);

console.log(
  `Game ended, these were the top three highest scores: ${topThree(newArray)}`,
);

export { setScore, getScores, latest, highest, topThree };
