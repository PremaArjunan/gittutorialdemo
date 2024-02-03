function handleFormSubmit(event){
    event.preventDefault();
  
    const userDetails = {
      username: event.target.username.value,
      email:event.target.email.value,
      phone:event.target.phone.value,
    };
    //localStorage.setItem("User Details", JSON.stringify(userDetails));
    axios.get("https://crudcrud.com/api/f729d40a19b54fff9b887d339059d139/userDetails",userDetails)
      .then(res => console.log(res))
      .catch(err =>console.log(err))
    }
    //module.exports = handleFormSubmit;