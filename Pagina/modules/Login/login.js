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
            console.log("Funcionando");
            switch (users.usertype[i]){
                case "admin":
                    console.log("El Usuario es Admin");
                    window.location.href = "../inicio_administrador.html"
                    break;
                case "user":
                    console.log("El Usuario es Usuario");
                    window.location.href = "../inicio_usuario.html"
                    break;
                case "envios":
                    console.log("El Usuario es Envios")
                case "insumos":
                    console.log("El Usuario es Insumos")
            }
            break;
        } else {
            alert("Usuario o Contraseña Inválidos")
            break;
        }
    }
});
