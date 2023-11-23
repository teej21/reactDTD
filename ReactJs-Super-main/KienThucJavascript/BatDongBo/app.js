setTimeout(() => {
  console.log('Hello')
}, 0)

console.log('I Am Alex')
const pFunc = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello')
    }, 0)
  })

const value = pFunc()
  .then((value) => {
    console.log(value)
    return 100
  })
  .catch((error) => {
    console.warn(error)
    return -100
  })
  .finally(() => {
    console.log('Ket thuc roi')
  })

console.log('1', value)
console.log('1', typeof value)
value.then((valuee) => {
  console.log('1', valuee)
  console.log('1', typeof valuee)
})
console.log('value', value)

/**
 * Async / Await
 * * await chỉ sử dụng được trong một async function
 * * Chỉ sử dụng await với promise
 */

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Loiiiii')
    }, 0)
  })

    (async () => {
      try {
        const value = await p2()
        console.log(value)
      } catch (error) {
        console.warn(error)
      } finally {
        console.log('Finally')
      }
    })()
