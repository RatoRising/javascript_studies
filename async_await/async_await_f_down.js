let btnShowPosts = document.getElementById('loadPosts').addEventListener('click', loadPost);

// Uma função assíncrona tem essa definicação em sua declaração
async function loadPost() {
   document.getElementById('posts').innerHTML = 'Buscando...'
   let req = await fetch('https://jsonplaceholder.typicode.com/posts')
   let retornoReqPostJson = await req.json();
   montarBlog(retornoReqPostJson);
};




function montarBlog(nameX) {
   let accumulator = '';
   for (let i in nameX) {
      accumulator += `<h3>${nameX[i].title}</h3>`
      accumulator += `<p>${nameX[i].body}</p>`
      accumulator += `< = = = = = = = = = = = = = = >`
   }
   document.getElementById('posts').innerHTML = accumulator
}