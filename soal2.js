function dense_ranking(rankedScores, gitsScores) {
  const uniqueScores = [...new Set(rankedScores)];
  const gitsRanks = [];

  for (let score of gitsScores) {
    let rank = 1;
    while (rank <= uniqueScores.length && score <= uniqueScores[rank - 1]) {
      rank++;
    }
    gitsRanks.push(rank);
  }

  return gitsRanks;
}

const rankedScores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];
const output = dense_ranking(rankedScores, gitsScores);

console.log("Ranked Scores", rankedScores);
console.log("Gits Scores", gitsScores);

console.log(output.join(" "));
