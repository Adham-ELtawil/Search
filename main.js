function Searching() {
    var search = document.querySelector(".search").value;
    var replaceing = search.replace(" ", "+", search);
    var url = 'https://www.bing.com/search?q=' + replaceing;

    window.location.href = url
}

document.querySelector(".search").addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        Searching();
    }
});

