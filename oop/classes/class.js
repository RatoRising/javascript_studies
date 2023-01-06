class Polygon {
   constructor(height, width) {
      this.height = height
      this.width = width
   }

   get area() {
      return this.#resolveArea()
   }

   #resolveArea() {
      return this.height * this.width
   }
}

let polygonNew = new Polygon(50, 60)
console.log(polygonNew.area)