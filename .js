function savetoLocalStroage(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const phoneNumber=e.target.phoneNumber.value;

    const obj={
      name,
      email,phoneNumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
  }
