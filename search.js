function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsList = document.getElementById("searchResults");
    let hasResults = false
    var i = 0
    //var e = 0
    var searchOutput = []
    //var MostSearched = ["fasz", "pina", "pöcs"]

    resultsList.innerHTML = "";

    const searchIDs = ["Alma", "Körte", "Szilva", "Banán", "Narancs", "fasz"];

    for (let items of searchIDs) {

        if (items.toLowerCase().includes(searchInput) && searchInput != "") {
            hasResults = true
            //document.getElementById("searchButton").setAttribute("href", "#/results")
            if (i < 5) {
                searchOutput.push(items)
                var li = `<li><a class="dropdown-item" id="Src${i}" href="#">${searchOutput[i]}</a></li>`;
                resultsList.innerHTML += li;
                i++
            }
            else {
                i = 0
            }
        }

        if (searchInput == "") {
            hasResults = true
            //document.getElementById("searchButton").setAttribute("href", "#/results")
            /*if(e < 3){
              var li = `<li><a class="dropdown-item" id="Top${e}" href="#">${MostSearched[e]}</a></li>`;
              resultsList.innerHTML += li;
              e++
            }*/
            resultsList.innerHTML = "";
            var li = `<li><a class="dropdown-item" href="#">fasz</a></li>
            <li><a class="dropdown-item" href="#">pöcs</a></li>
            <li><a class="dropdown-item" href="#">kuki</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">All ID's</a></li>`
            resultsList.innerHTML += li;
        }
    }

    if (!hasResults) {
        li = `<li><a class="dropdown-item" id="NoRes" href="#">No results</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">All ID's</a></li>`;
        resultsList.innerHTML = li;
    }
};