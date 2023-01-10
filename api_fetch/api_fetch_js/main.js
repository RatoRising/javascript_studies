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
   fetch(url)
      .then((response) => response.json())
      .then((data) => (render_api_result.textContent = JSON.stringify(data)))
      .catch((error) => console.error(error));
}

function getUser(userId) {
   fetch(`${url}${userId}`)
      .then((response) => response.json())
      .then((data) => {
         user_name.innerHTML = data.name;
         user_city.innerHTML = data.city;
         user_avatar.src = data.avatar;
      })
      .catch((error) => console.error(error));
}

function addUser(newUser) {
   fetch(url, {
         method: 'POST',
         body: JSON.stringify(newUser),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      })
      .then((response) => response.json())
      .then((data) => (alert_api.textContent = data))
      .catch((error) => console.error(error));
}

function updateUser(userId, updatedUser) {
   fetch(`${url}${userId}`, {
         method: 'PUT',
         body: JSON.stringify(updatedUser),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      })
      .then((response) => response.json())
      .then((data) => (alert_api.textContent = data))
      .catch((error) => console.error(error));
}

function deleteUser(userId) {
   fetch(`${url}${userId}`, {
         method: 'DELETE',
         // Durante o curso é informado que os headers são necessários, no entando funciona normalmente sem eles.
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      })
      .then((response) => response.json())
      .then((data) => (alert_api.textContent = data))
      .catch((error) => console.error(error));
}

// getUsers();
// getUser(3);
// addUser(newUser);
// updateUser(3, updatedUser)
// deleteUser(9);