const jokeText = document.getElementById("joke");
const getJokeBtn = document.getElementById("getJoke");

async function fetchJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    jokeText.innerText = data.joke;
  } catch (error) {
    jokeText.innerText = "Failed to fetch joke. Try again!";
    console.error("Error fetching joke:", error);
  }
}

getJokeBtn.addEventListener("click", fetchJoke);
