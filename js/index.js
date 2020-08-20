window.onload = function () {
  const data = getData("https://www.affirmations.dev").then((json) => {
    document.querySelector("#message").textContent = json.affirmation;
  });

  async function getData(url) {
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const resourceURL = encodeURI(proxyURL + url);
    const response = await fetch(resourceURL);
    const data = await response.json();
    return data;
  }
};
