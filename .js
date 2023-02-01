function savetoLocalStroage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phoneNumber=event.target.phoneNumber.value;

    const obj={
      name,
      email,phoneNumber
    }
   
  }
  localStorage.setItem(obj.email, JSON.stringify(obj));