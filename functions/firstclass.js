// First Class Function
const sayMyName = () => console.log('Rato')
const runFunction = fn => fn()
runFunction(sayMyName)
runFunction(() => console.log('discover'))