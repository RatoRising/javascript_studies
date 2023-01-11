const url = 'http://localhost:5500/api/';
const newUser = {
   name: 'Olivia Palito',
   avatar: 'https://picsum.photos/200/400',
   city: 'Santos'
};

const updatedUser = {
   name: 'Mario',
   avatar: 'https://picsum.photos/200/400',
   city: 'Paulínia'
};


function getUsers() {
   axios.get(url)
      .then((response) => api_result.textContent = JSON.stringify(response.data))
      .catch((error) => console.error(error))
}

function getUser(userId) {
   axios.get(`${url}${userId}`)
      .then((response) => {
         let user = response.data
         user_id.innerHTML = 'Id: ' + user.id
         user_name.innerHTML = 'Name: ' + user.name
         user_city.innerHTML = 'City: ' + user.city
         user_avatar.src = user.avatar
      })
      .catch((error) => console.error(error))
}

function addNewUser(newUser) {
   axios.post(url, newUser)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
}

function updateUser(userId, updatedUser) {
   axios.put(`${url}${userId}`, updatedUser)
      .then((response) => console.log(response)) // mostrar o status no console
      .then((response) => api_result = response) // mostrar o resultado no documento
      .catch((error) => console.error(error));
}

function deleteUser(userId) {
   axios.delete(`${url}${userId}`)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
}

// addNewUser(newUser)
// getUsers()
// getUser(1)
// updateUser(5, updatedUser)
// deleteUser(2)