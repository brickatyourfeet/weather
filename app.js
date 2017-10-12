
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
