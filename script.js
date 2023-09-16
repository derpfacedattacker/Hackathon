

  async function weatherSearch(){

    const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=43.1566&lon=-77.6088&exclude=hourly,minutely&appid=6b3ecfe89a1df492b9e8cd9a0a5e2019&units=imperial");
    var data = await response.json();
    var dayMain = []
    for(const x in data['daily']){
        dayMain.push(data['daily'][x]['weather'][0]['main'])    
    }

    var weather = document.getElementById('weather').value;
    console.log(weather);

    if(weather=="Rain"){
        var text = "Rainy weather results: "
    }
    else if(weather=="Clouds"){
               var text = "Cloudy weather results: "
    }
    else if(weather=="Clear"){
        var text = "Clear weather results: "
    }
    else if(weather=="Snow"){
        var text = "Snowy weather results: "
    }
    document.getElementById("display").innerHTML = text;
    var y = 0;
    var z = 0
    var dayString = "";
    for(const x in dayMain){
        if(weather == dayMain[x]){
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            y++;
            let currentDate = `${month}-${day + z}-${year}`;
            var main = data['daily'][x]['weather'][0]['main'];
            var summary = data['daily'][x]['summary'];
            var temp = data['daily'][x]['temp']['day'];
            var uvi = data['daily'][x]['uvi'];
            dayString = dayString+  ("<br> <br>" + currentDate + ":" + summary + ". The main weather of the day is: " + main + ". The average temperature during the day is " + temp + " Farhenheit with a UVI of " + uvi +'.')
            document.getElementById('content').innerHTML = dayString;
            console.log(y)
        }
        z ++;
    }
    if(y==0){
        var dayString = ("Sorry, there is no day in the next nine days that match that description.");
        document.getElementById('content').innerHTML = dayString;
    }
}