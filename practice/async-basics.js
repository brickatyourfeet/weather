console.log('Starting app')

setTimeout(() => {
  console.log('...inside of callback...')
}, 1000)

setTimeout(() => {
  console.log('...second timeout...')
}, 0)

console.log('Finishing up')
