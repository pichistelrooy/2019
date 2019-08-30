function validacion() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) 
    {   
        alert('[ERROR] El campo NOMBRE es obligatorio');
        return false;
    } 
    else if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) 
    {   
        alert('[ERROR] El campo APELLIDO es obligatorio');
        return false;
    } 
    else if (nombre.length > 20) 
    {
      alert('[ERROR] El campo NOMBRE debe tener un largo máximo de 20 carácteres');
      return false;
    }
    else if (apellido.length > 20) 
    {
        alert('[ERROR] El campo APELLIDO debe tener un largo máximo de 20 carácteres');
        return false;
    }
    else if (/^[a-zA-Z]+$/.test(nombre) == false) 
    {
        alert(/^[a-zA-Z]+$/.test(nombre));
        alert('[ERROR] El campo NOMBRE debe tener un formato válido');
        return false;
    }
    else if (/^[a-zA-Z]+$/.test(apellido) == false) 
    {
        alert('[ERROR] El campo APELLIDO debe tener un formato válido');
        return false;
    }
    else if(isNaN(edad)) 
    {
        alert('[ERROR] El campo EDAD debe tener un valor válido');
        return false;
    }
    else if(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{9,20}$/.test(password) == false) 
    {
        alert('[ERROR] El campo CONTRASEÑA no cumple con las condiciones');
        return false;
    }
    else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo) == false) 
    {
        alert('[ERROR] El campo CORREO no es válido');    
        return false;
    }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
  }