class Job {
   constructor(hourlyAmount, estimateTime, discount) {
      this.hourlyAmount = hourlyAmount
      this.estimateTime = estimateTime
      this.discount = discount
   }

   get estimateCost() {
      return this.#resolveEstimate()
   }

   #resolveEstimate() {
      const convertDiscountInputToDecimal = 1 - this.discount/100
      return this.hourlyAmount * this.estimateTime * convertDiscountInputToDecimal
   }
}

// Bloco 1
const job1 = new Job(50, 20, 10)
console.log(job1.estimateCost)


// Bloco 2
let job2 = new Job()
job2.hourlyAmount = 50
job2.estimateTime = 20
job2.discount = 10
let estimate = job2.estimateCost
console.log(estimate)