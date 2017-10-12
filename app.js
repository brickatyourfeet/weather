const request = require('request')
const yargs = require('yargs')

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

encodedAddress = encodeURIComponent(argv.address)


request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  if(body === 'undefined') console.log('check google map api url, no connection')
  if (error) {
    console.log('cannot connect to server')
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find address')
  } else if (body.status === 'OK'){
    //console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`longitude: ${body.results[0].geometry.location.lng}`)
  }

})
