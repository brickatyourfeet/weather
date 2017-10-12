
const yargs = require('yargs')

const geocode = require('./geocode/geocode.js')

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
    console.log(JSON.stringify(results, undefined, 2))
  }
})

const request = require('request')
request({
  url: "https://api.darksky.net/forecast/ad0b49edc3e64215939a9346478e417c/47.1474103,-122.3239889",
  json: true
}, (error, response, body)=> {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature)
  }else {
    console.log('unable to retrieve weather from forecast.io')
  }
})


// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// darksky api key: ad0b49edc3e64215939a9346478e417c
