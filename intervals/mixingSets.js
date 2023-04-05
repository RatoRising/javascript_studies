const timeInterval = 1000
const timeOut = 10000
const checking = () => console.log('checking')

let intervalLogic = setInterval(checking, timeInterval)

setTimeout( () => clearInterval(intervalLogic), timeOut)