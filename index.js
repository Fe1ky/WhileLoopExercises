//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuel = null;
let numberOfAstronauts = null;
let altitude = 0 ;
const input = require('readline-sync');


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


while(startingFuel === null){
let fuel = input.question('what is the starting fuel Level? ');
if(fuel>5000 && fuel<30000){
  startingFuel = fuel;
  console.log('The srarting amout of fuel is '+startingFuel);
} else if (fuel<5000){
  console.log('Not Enough Fuel! Must be more then 5000')
} else if(fuel>30000){
  console.log('Too Much Fuel! Must be below 30,000')
}
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while(numberOfAstronauts=== null){
    let astronauts = input.question('How many astronauts are on-board? ');
    if (astronauts<=7){
      numberOfAstronauts = astronauts;
      console.log('There are '+ numberOfAstronauts + ' astronauts on-board');
    } else if (astronauts> 7){
    console.log('Only 7 astronauts can ride!')
    }
  } 
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while(startingFuel > 0){
  startingFuel = startingFuel - 100;
  altitude = altitude + 50;
  console.log('Fuel:'+startingFuel + '\n'+ 'Altitude: '+altitude);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
 

 //Exercise #5

 console.log('The shuttle gained an altitude of '+ altitude+ ' km');

 if(altitude>2000){
   console.log('Orbit achieved!')
 } else {
   console.log('Failed to reach orbit.');
 }