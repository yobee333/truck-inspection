//date
let date = new Date()

date.getDate
document.getElementById("today").innerHTML = date

//VIN Decoder
document.querySelector('#vin-button').addEventListener('click', getFetch)

function getFetch(){
    const vin = document.querySelector('input').value
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/'+ vin + '?format=json'

fetch(url)
     .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('#year').innerText = data.Results[9].Value
        let make = document.querySelector('#make').innerText = data.Results[6].Value
        document.querySelector('#model').innerText = data.Results[8].Value
        let series = document.querySelector('#series').innerText = data.Results[11].Value
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    });
}




//[9]-year, [6]-make, [8]-model, [11]-series
