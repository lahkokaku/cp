const mockTimeout = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved')
    }, duration)
  })
}

const call = async () => {
  const res = await mockTimeout(200)
  console.log(res)
}

call()