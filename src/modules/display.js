/* eslint-disable */
const userName = document.querySelector(".name-input");
const userScore = document.querySelector(".score-input");
const submitBtn = document.querySelector(".form-submit");
const refreshBtn = document.querySelector(".refresh");
const endpoint = new URL(
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WiYu2SZ3z9RSy8b97AHH/scores"
);

const postData = async () => {
  const name = userName.value;
  const score = userScore.value;

  if (!name) {
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

const loadData = async () => {
  const userScores = document.getElementById("user-data");

  const response = await fetch(endpoint);

  const data = await response.json();

  Object.entries(data).map((entry) => {
    const value = entry[1];
    let userData = "";

    value
      .sort((a, b) => b.score - a.score)
      .forEach((e) => {
        userData += `
      <div class="user-score-display">
      <h4 class="user-name">${e.user} : </h4>
      <h4 class="user-score">${e.score}</h4>
      </div>
      `;
      });
    userScores.innerHTML = userData;
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
