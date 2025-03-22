function makeAjaxcall(country){
    let xhr =  new XMLHttpRequest();
    xhr.open('GET',"",true);
    xhr.send();
    return xhr;
}
function displayData(data)
{
    let eachCountry =  `<div class="col-3">
    <div class="card">
        <div class="card-header">
            <img src="${data.flags.png}" alt="image not found" class="img-fluid" />
        </div>
        <div class="card-body text-center">
            <h2>${data.moveisName}</h2>
            <h4>${movie.heroname}</h4>
            <button class="btn btn-dark btn-sm">watch now</button>
        </div>
    </div>
</div>`;
document.getelementBy
}





function getcountry()
{
    let
}