const os = require('os')

const { freemem, totalmem } = os

setInterval( () => {

  const fmem = parseInt(freemem() / 1024 / 1024)
  const tmem = parseInt(totalmem() / 1024 / 1024)

  console.clear()

  console.log('|========================')
  console.log(`| Memória Usada: ${(tmem - fmem)} MB`)
  console.log(`| Memória Livre: ${fmem} MB`)
  console.log(`| Memória Total: ${tmem} MB`)
  console.log('|========================')

}, 1000)