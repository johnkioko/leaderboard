const scores = [
  { Name: 'John', score: 100 },
  { Name: 'kioko', score: 79 },
  { Name: 'Mutisya', score: 70 },
  { Name: 'Engineer', score: 85 },
];

const scoresData = document.getElementById('user-data');

let userData = '';

scores.forEach((score) => {
  userData += `
  <h4 class="user-score">${score.Name} : ${score.score}</h4>
`;
});

scoresData.innerHTML = userData;
