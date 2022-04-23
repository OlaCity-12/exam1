function lowerCasename(string) {
  return string.toLowerCase();
}

function getData(e) {
  const name = document.querySelector("#searchbox").value;
  document.querySelector("#searchbox").value = ""
  const displayname = lowerCasename(name);

  fetch(
    `https://itunes.apple.com/search?term=${displayname}&media=music&entity=album&attribute=artistTerm&limit=2`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".displayBox").innerHTML = `
     <div>
     <img src="${data.results["0"].artworkUrl100}" alt= "${data.artistName}" />
   </div>
   <div class="displayInfo">
     <h1>${data.results["0"].artistName}</h1>
     <br />
     <p>${data.results["0"].copyright}</p>
   </div>
     `;
    })
    .catch((err) => {
      console.log(err);
    });

  e.preventDefault();
}

document.querySelector("#seachbutton").addEventListener("click", getData);


