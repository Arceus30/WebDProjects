const results = document.querySelector("#results");
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  results.innerHTML = "";
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  try {
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
  } catch (e) {
    console.log(e);
  }
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      results.append(img);
    }
  }
};
