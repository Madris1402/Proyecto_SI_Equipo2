let users = {

    empleadoid: ["001", "002", "003", "004" ],
    password: ["admin", "1234", "1234", "1234" ],
    usertype: ["admin", "user", "envios", "insumos"]
}


const loginform = document.getElementById('loginform');
const inputid = document.getElementById('empleadoid');
const inputpass = document.getElementById('pass');

loginform.addEventListener('submit', (event) => {
    event.preventDefault();
    const empleadoid = inputid.value;
    const pass = inputpass.value;

    for (let i = 0; i < users.empleadoid.length; i++) {
        if (users.empleadoid[i] === empleadoid && users.password[i] === pass) {
            alert("Funcionando");
            switch (users.usertype[i]){
                case "admin":
                    alert("El Usuario es Admin");
                    break;
                case "user":
                    alert("El Usuario es Usuario");
                    break;
                case "envios":
                    alert("El Usuario es Envios")
                case "insumos":
                    alert("El Usuario es Insumos")
            }
            break;
        } else {
            alert("Usuario o Contraseña Inválidos")
            break;
        }
    }
});
