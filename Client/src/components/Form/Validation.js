const validation = (data) => {
    let errors = {}

    if (data.email.includes('@')){
        errors.e1 = "Ingresa un email valido!";
    }
    if(data.email){
        errors.e2 = "Ingrese un email";
    }
    if(data.email.length > 35){
        errors.e3= "Debe tener menos de 36 caracteres";
    }

    if(!/\d/.test(data.password)) {
        errors.p1= "Al menos 1 numero";
    }
    if(data.password.length < 6 || data.password.length > 10) {
        errors.p2 = "Debe tener mas de 6 y menos de 10 caracteres";
    }
    
    return errors;
}
export default validation;