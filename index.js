function getAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const diff =  today.getMonth() - birth.getMonth();
    
    if (diff <= 0 && today.getDate() < birth.getDate()) {
        age--;
    }
    
    return(age);    
}

const age = getAge("2002-01-25");
document.getElementById("age").innerHTML = age.toString();