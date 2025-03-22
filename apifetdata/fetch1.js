function getData() {
    // Create XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Open a GET request
    xhr.open("GET", "./movies.json", true);

    // Send the request
    xhr.send();

    // Display loading message while the request is in progress
    xhr.addEventListener("progress", function () {
        document.getElementById("display-loader").textContent = "loading.......";
    });

    // Process the response once loaded
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            if (data.length === 0) return;

            let eachMovies = "";
            for (let movie of data) {
                eachMovies += `
                <div class="col-3">
                    <div class="card">
                        <div class="card-header">
                            <img src="${movie.imageUr1}" alt="image not found" class="img-fluid" />
                        </div>
                        <div class="card-body text-center">
                            <h2>${movie.moveisName}</h2>
                            <h4>${movie.heroname}</h4>
                            <button class="btn btn-dark btn-sm">watch now</button>
                        </div>
                    </div>
                </div>`;
            }
            document.getElementById("display-data").innerHTML = eachMovies;
        } else {
            console.error(`Failed to load data: ${xhr.status}`);
        }
    });
}

// Call the function
getData();
// This code should now work as expected! Let me know if you have more questions. 😊









