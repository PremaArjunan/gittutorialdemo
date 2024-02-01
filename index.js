function handleFormSubmit(event) {
  event.preventDefault();

  const user = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;


  const newUser = {
    username: user,
    email: email,
    phone: phone,
  };

  axios.post("http://crudcrud.com/api/1d261e1e4bb041609a596474a6464a58/appointmentData",newUser)
  .then(res => console.log(res))
  .catch(err =>console.log(err))
}