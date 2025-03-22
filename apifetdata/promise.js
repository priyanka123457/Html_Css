function getData() {
    fetch(`https://restcountries.com/v3.1/name/bharat`)
        .then(response => response.json())
        .then(data => {
            displayData(data[0]);
            return fetch(`https://restcountries.com/v3.1/name/usa`);
        })
        .then(response => response.json())
        .then(data => {
            displayData(data[0]);
            return fetch(`https://restcountries.com/v3.1/name/pak`);
        })
        .then(response => response.json())
        .then(data => {
            displayData(data[0]);
            return fetch(`https://restcountries.com/v3.1/name/uk`);
        })
        .then(response => response.json())
        .then(data => {
            displayData(data[0]);
        })
        .catch(err => {
            console.log(err);
        });
}

function displayData(data) {
    const eachCountry = `
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img src="${data.flags.png}" alt="Image Not Found" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h1>${data.name.common}</h1>
                    <h3>${data.capital[0]}</h3>
                    <h4>${(data.population / 1000000).toFixed(2)} M People</h4>
                </div>
            </div>
        </div>`;

    document.getElementById('display-data').insertAdjacentHTML('beforeend', eachCountry);
}

getData();

