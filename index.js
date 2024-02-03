function handleFormSubmit(event){
    event.preventDefault();
      let user = {
          username:event.target.username.value,
          email:event.target.email.value,
          phone:event.target.phone.value
      };
      
      axios.get("https://crudcrud.com/api/f729d40a19b54fff9b887d339059d139/userDetails",user)
      .then(res => console.log(res))
      .catch(err =>console.log(err))
      //localStorage.setItem(user.email, JSON.stringify(user));
      displayUsers(user);
      }
      
  
  
      function displayUsers(user){
        var userList = document.querySelector('ul');
        let listItem = document.createElement('li');
       listItem.appendChild(document.createTextNode(`${user.username}-${user.email}-${user.phone}`));
        
        let dele_button = document.createElement('button');
        dele_button.appendChild(document.createTextNode('Delete'));
          
        listItem.appendChild(dele_button);
        userList.appendChild(listItem);
          
        dele_button.addEventListener('click',function(event){
            userList.removeChild(event.target.parentElement);
            localStorage.removeItem(user.email);
        }); 
     }