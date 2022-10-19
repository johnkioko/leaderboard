let userName = document.querySelector(".name-input");
let userScore = document.querySelector(".score-input");
const submitBtn = document.querySelector(".form-submit");
const refreshBtn = document.querySelector(".refresh");
const endpoint = new URL(
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WiYu2SZ3z9RSy8b97AHH/scores"
);

const postData = async () => {
  const name = userName.value;
  const score = userScore.value;

  if (!name) {
    alert("Cannot submit an empty form");
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "leaderboard-game",
      user: name,
      score: Number(score),
    }),
  });
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  postData();

  userName.value = "";
  userScore.value = "";
});

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loadData();
});

const loadData = async () => {
  const userScores = document.getElementById("user-data");

  const response = await fetch(endpoint);

  const data = await response.json();

  Object.entries(data).map((entry) => {
    let value = entry[1];
    let userData = "";

    value.forEach((e) => {
      userData += `
      <h4 class="user-score">${e.user} : ${e.score}</h4>`;
    });
    userScores.innerHTML = userData;
  });
};
