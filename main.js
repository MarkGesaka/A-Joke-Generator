const jokeBtn = document.getElementById('joke-btn');
const jokeEl = document.getElementById('joke');

function getJoke() {
  const xml = new XMLHttpRequest();

  xml.open('GET', 'https://api.chucknorris.io/jokes/random');

  xml.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something Went Wrong';
      }
    }
  };
  xml.send();
}

jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);
