const loadData = data => {
    fetch(`https://bing-web-search1.p.rapidapi.com/search?q='${data}'&mkt=en-us&textFormat=Raw&safeSearch=Off&freshness=Day`, {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-key": "1a711a38f0msh5b3fc52aea65fd2p109aa5jsn5376e6d0b24c",
                "x-rapidapi-host": "bing-web-search1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => display(data.webPages.value))
        // .then(data => console.log(data.webPages.value))
}


// fetch(`https://bing-web-search1.p.rapidapi.com/search?q='${data}'&mkt=en-us&textFormat=Raw&safeSearch=Off&freshness=Day`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-bingapis-sdk": "true",
// 		"x-rapidapi-key": "1a711a38f0msh5b3fc52aea65fd2p109aa5jsn5376e6d0b24c",
// 		"x-rapidapi-host": "bing-web-search1.p.rapidapi.com"
// 	}
// })




document.getElementById("button").addEventListener("click", function () {
    let inputValue = document.getElementById("inputValue").value;
    loadData(inputValue)
})
const resultSection = document.getElementById("results")


const display = link => {
    resultSection.innerHTML = ``
    link.forEach(element => {
        const url = element.url;
        const snippet = element.snippet;
        const name = element.name;
        const newDiv = document.createElement("div")

        newDiv.innerHTML = `
        <div class="container border border-primary my-4 p-4">
            <a href="${url}">${name}</a>
            <p>${snippet}</p>
        </div>
        `
        resultSection.appendChild(newDiv)

        // console.log(element.name)
        // console.log(element.url)
        // console.log(element.snippet)
    });
}