function getFormvalue()
{

    const fname = document.getElementsByName("fname")[0].value
    const lname = document.getElementsByName("lname")[0].value
    if (fname.length <= 0)
    {
        window.alert("El Campo First Name no puede estar vacío");
        return false;
    }
    else if (lname.length <= 0){
        window.alert("El Campo Last Name no puede estar vacío");
        return false;
    }
    else {
        windows.alert("Success");
        return true;
    }
}