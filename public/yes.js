// import { response } from "express";

async function success(pos){
    crds = pos.coords;
    lat = pos.coords.latitude;
    long = pos.coords.longitude;
    
    
    valueOfNumber = document.getElementById("numbox").value;
    document.getElementById("lat").textContent = lat;
    document.getElementById("long").textContent = long;
    
    data = {lat, long, valueOfNumber};
    options = {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(data),
    }
    response = await fetch('/api', options);
    data = await response.json();
    console.log(data)
}

navigator.geolocation.getCurrentPosition(success);



document.getElementById("numInput").addEventListener("click", confirm)


function confirm(){
    navigator.geolocation.getCurrentPosition(success);
}