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
         user_id.innerHTML = 'Id: ' + response.data.id
         user_name.innerHTML = 'Name: ' + response.data.name
         user_city.innerHTML = 'City: ' + response.data.city
         user_avatar.src = response.data.avatar
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
// getUser(4)
// updateUser(5, updatedUser)
// deleteUser(2)