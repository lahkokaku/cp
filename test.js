const foo = () => {
  bar()
  que()
  function bar() {
    console.log('declaration')
  }
  const que = function() {
    console.log('expression')
  }
}
foo()