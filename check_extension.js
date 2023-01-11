const isImage = filename => {
   let allowedImages = ['jpg', 'png', 'svg']

   return !!allowedImages.find(ext => filename.includes(ext))
}

console.log(isImage('filename.png'))