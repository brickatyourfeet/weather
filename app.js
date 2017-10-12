
const yargs = require('yargs')

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
  if(errorMessage){
    console.log(errorMessage)
  }else { //stringify takes 3 params, the object, filter, and spacing
    console.log(results.address)
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=> {
      if(errorMessage){
        console.log(errorMessage)
      }else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
      }
    })
  }
})




// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// darksky api key: ad0b49edc3e64215939a9346478e417c
