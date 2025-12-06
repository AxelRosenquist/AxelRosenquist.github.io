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
const spans = document.querySelectorAll('[id="age"]');
spans.forEach(span => span.textContent = "23");