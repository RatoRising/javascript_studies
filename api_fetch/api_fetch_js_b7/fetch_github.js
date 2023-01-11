// First code with axios and second code fetching

const urlRato = 'https://api.github.com/users/';

function getUserRato(userId) {
   axios.get(`${urlRato}${userId}`)
      .then((response) => {
         let data = response.data
         user_id.innerHTML = data.id;
         user_name.innerHTML = data.login;
         user_city.innerHTML = data.location;
         console.log('first success')
      })
      .catch((error) => console.error(error));
}

function getUserRato(userId) {
   fetch(`${urlRato}${userId}`)
      .then((response) => response.json())
      .then((data) => {
         user_id.innerHTML = data.id;
         user_name.innerHTML = data.login;
         user_city.innerHTML = data.location;
         console.log('Second success')
      })
      .catch((error) => console.error(error));
}

getUserRato('ratorising')