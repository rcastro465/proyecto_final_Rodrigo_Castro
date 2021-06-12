// ********** INICIO FUNCIONES MENU***************//

const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;


//muestra y oculta el menu lateral
function menu() {
	enlaces.classList.toggle("enlaces2");
	enlaces.style.transition = "transform 0.5s ease-in-out";
}

//llama al la funcion menu que la hacer click en el boton menu esconda o muestre el menu lateral
hamburguesa.addEventListener("click", function () {
	menu();
	if (document.querySelector(".enlaces.enlaces2")) {
		abierto = true;
	} else {
		abierto = false;
	}

})

window.addEventListener("click", function (e) {
	//  this.console.log(e.target)
	if (abierto) {
		if (e.target !== menuHamburguesa) {
			menu();
			abierto = false;
		}
	}
})

window.addEventListener("resize", function () {
	if (screen.width > 800) {
		if (abierto) {
			menu();
			enlaces.style.transition = "none";
			abierto = false;
		}

	}
})

// ********** FIN FUNCIONES MENU***************//

//*******INICIO MODAL LOGIN******* *//

var cerrar = document.querySelectorAll(".close")[0];
var cerrarr = document.querySelectorAll(".close2")[0];
var cerrarrnew = document.querySelectorAll(".close3")[0];
var abrir = document.querySelectorAll(".cta")[0];
var modal = document.querySelectorAll(".modal")[0];
var modalc = document.querySelectorAll(".modal-container")[0];
var cerrare = document.querySelectorAll(".close")[1];
var abrire = document.querySelectorAll(".cta")[1];
var modale = document.querySelectorAll(".modal")[1];
var modalce = document.querySelectorAll(".modal-container")[1];


abrir.addEventListener("click", function (e) {
	e.preventDefault();
	modalc.style.opacity = "1";
	modalc.style.visibility = "visible";
	modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
	modal.classList.toggle("modal-close");

	setTimeout(function () {
		modalc.style.opacity = "0";
		modalc.style.visibility = "hidden";
	}, 1000)
})


cerrarr.addEventListener("click", function () {
	modal.classList.toggle("modal-close");

	setTimeout(function () {
		modalc.style.opacity = "0";
		modalc.style.visibility = "hidden";
	}, 1000)
})

cerrarrnew.addEventListener("click", function () {
	modal.classList.toggle("modal-close");

	setTimeout(function () {
		modalc.style.opacity = "0";
		modalc.style.visibility = "hidden";
	}, 1000)
})


window.addEventListener("click", function (e) {
	//console.log(e.target);
	if (e.target == modalc) {
		modal.classList.toggle("modal-close");

		setTimeout(function () {
			modalc.style.opacity = "0";
			modalc.style.visibility = "hidden";
		}, 1000)
	}


})

//*******FIN MODAL LOGIN******* *//
//*******FIN MODAL CARRITO******* *//


//slider testimonial//

let slider = document.querySelector('.slider-contenedora');
let sliderind = document.querySelectorAll('.slider-test');
let contador = 1;

let tamañowidth = sliderind[0].clientWidth;
let intervalo = 6000;

window.addEventListener("resize", function () {
	tamañowidth = sliderind[0].clientWidth;
})

setInterval(function tiempo() {
	slides();
}, intervalo)


function slides() {
	slider.style.transform = 'translate(' + (-tamañowidth * contador) + 'px)';
	slider.style.transition = 'transform 1s';
	contador++;
	if (contador === sliderind.length) {
		contador = 0;
		setTimeout(function () {
			slider.style.transform = 'translate(0px)';
			slider.style.transition = 'transform 0s';
		}, intervalo)

	}


}
//fin slider testimonial//


//**formulario de contacto* */

function ValidarInformacion() {
	let datos = new Object();


	var nombre = document.getElementById("name_input").value; //obtengo el valor del input nombre
	var correo = document.getElementById("email_input").value;
	var telefono = document.getElementById("telephone_input").value;
	var curso = document.getElementById("subject_input").value;
	var descripcion = document.getElementById("message_input").value;


	//si nombre tiene texto
	if (nombre.length < 5) {
		//va a hacer algo
		document.getElementById("msgNombre").innerText = "Ingrese un nombre correcto";
	} else {
		//va a hacer otra cosa
		document.getElementById("msgNombre").innerText = "";
		datos["nombre"] = nombre; //el nombre en naranjo puede ser cualquiera
	}


	//si correo tiene texto y formato
	if (correo.length > 0) {
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!regex.test(correo)) {
			document.getElementById("msgCorreo").innerText = "Ingrese un correo valido";
		} else {
			document.getElementById("msgCorreo").innerText = "";
			datos["correo"] = correo;
		}
	} else {
		document.getElementById("msgCorreo").innerText = "El correo es obligatorio";
	}


	if (telefono.length < 9) {
		document.getElementById("msgNumero").innerText = "Ingrese un numero valido";
	} else {
		document.getElementById("msgNumero").innerText = "";
		datos["telefono"] = telefono;
	}


	if (curso == 0) {
		document.getElementById("msgCurso").innerText = "Debe elegir una opcion";
	} else if (curso == "Asunto") {
		document.getElementById("msgCurso").innerText = "Debe elegir una opcion";
	} else {
		document.getElementById("msgCurso").innerText = "";
		datos["curso"] = curso;
	}


	if (descripcion.length <= 0) {
		document.getElementById("msgDescripcion").innerText = "El mensaje es obligatorio";
	} else {
		document.getElementById("msgDescripcion").innerText = "";
		datos["descripcion"] = descripcion;


		if (nombre.length == "" || !regex.test(correo) || nombre.length < 5 || curso == "Asunto" || correo.length == "" || telefono.length == "" || descripcion.length == "") {
			swal("Error", "Favor completar todos los datos", "warning", {
				button: "Cerrar!",
			});
		} else {


			if (curso == "Felicitaciones") {


				swal({
					title: "Registro Exitoso!",
					text: "Hola, " + nombre + " Agradecemos mucho sus felicitaciones, nos alegra que hayas pasado un grato momento en The Chilean Burguer",
					type: "success",
					confirmButtonText: "Cool",
					icon: "success"
				});

			} else if (curso == "Reclamos") {

				swal({
					title: "Registro Exitoso!",
					text: "Hola, " + nombre + " lamentamos mucho su situacion, nos pondremos en contacto para dar solucion a su reclamo. Saludos, Equipo The Chilean Burguer",
					type: "success",
					confirmButtonText: "Cool",
					icon: "success"
				});

			} else if (curso == "Sugerencias") {


				swal({
					title: "Registro Exitoso!",
					text: "Hola, " + nombre + " agradecemos sus sugerencias, las tomaremos en cuenta para poder seguir mejorando y entregando un buen servicio. Saludos, Equipo The Chilean Burguer",
					type: "success",
					confirmButtonText: "Cool",
					icon: "success"
				});


			} else if (curso == "Trabaja con Nosotros") {

				swal({
					title: "Registro Exitoso!",
					text: "Hola, " + nombre + " agrademos las ganas de querer formar parte de nuestro equipo, nos pondremos en contacto en caso de necesitar una persona con tus capacidades. Saludos, Equipo The Chilean Burguer",
					type: "success",
					confirmButtonText: "Cool",
					icon: "success"
				});


			}

			document.getElementById("name_input").value = "";
			document.getElementById("email_input").value = "";
			document.getElementById("telephone_input").value = "";
			document.getElementById("message_input").value = "";


		}


	}


	console.log(datos);


}


//**valida numero numero de telefono */
function validaNumericos(event) {
	if (event.charCode >= 48 && event.charCode <= 57) {
		return true;
	}
	return false;
}

//**valida numero numero de telefono */


//**fin formulario de contacto* */


//**login */
function ValidarLogin() {

	let datos = new Object();
	var user = document.getElementById("user-log").value; //obtengo el valor del input nombre
	var pass = document.getElementById("pass-log").value; //obtengo el valor del input nombre


	//si correo tiene texto y formato
	if (user.length > 0) {
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!regex.test(user)) {
			document.getElementById("msguser").innerText = "Ingrese un correo valido";
		} else {
			document.getElementById("msguser").innerText = "";
			datos["correo"] = user;

		}
	} else {
		document.getElementById("msguser").innerText = "El Usuario es obligatorio";
	}


	//si nombre tiene texto
	if (pass.length < 5) {
		//va a hacer algo
		document.getElementById("msgpass").innerText = "Ingrese una Password correcta";
	} else {
		//va a hacer otra cosa
		document.getElementById("msgpass").innerText = "";
		datos["pass"] = pass; //el nombre en naranjo puede ser cualquiera
		pass = "true";

		if (user != "" && regex.test(user) && pass == "true") {


			document.getElementById("modal-container").style.visibility = "hidden";
			document.getElementById("modal-container").style.opacity = "0";
			modal.classList.toggle("modal-close");
			document.getElementById("user-log").value = "";
			document.getElementById("pass-log").value = "";
			swal("Bienvenido", user, "success", {
				button: "Cerrar!",
			});


		} else {


			swal("Error", "Favor corregir los errores", "error", {
				button: "Cerrar!",
			});

		}

	}


	console.log(user);
	console.log(pass);
}
//*fin login */


//**RECUPERAR PASS */
function Recuperar_pass() {
	let datos = new Object();
	var pass = document.getElementById("email-pass").value;
	var modalpass = document.querySelectorAll(".cerrar-modal")[1];

	if (pass.length > 0) {
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!regex.test(pass)) {
			document.getElementById("msgrecuperar").innerText = "Ingrese un correo valido";
		} else {
			document.getElementById("msgrecuperar").innerText = "";
			datos["correo"] = pass;


			swal({
				title: "Correo Enviado",
				text: "Se ha enviado un correo a la cuenta " + pass + " Dentro de pocos segundos recibirá en su correo las instrucciones para restaurar su contraseña.",
				type: "success",
				confirmButtonText: "Cool",
				icon: "success"
			});


			//document.getElementById("miModalPass").style.visibility = "hidden";
			//document.getElementById("miModalPass").style.opacity = "0";
			document.getElementById("email-pass").value = "";
			// modalpass.classList.toggle("cerrar-modal-pass");
			window.location.href = "#"
			// modal.classList.toggle("modal-close");
			//document.getElementById("modal-container").style.visibility = "hidden";
			//document.getElementById("modal-container").style.opacity = "0";


		}
	} else {
		document.getElementById("msgrecuperar").innerText = "Ingrese su correo registrado";
	}


	console.log(pass);
}

//*FIN RECUPERAR PASS* */


/*inicio crear cuenta */
function CrearCuenta() {
	let datos = new Object();
	var emailnew = document.getElementById("email-new").value; //obtengo el valor del input nombre
	var pass1 = document.getElementById("pass-1").value; //obtengo el valor del input nombre
	var pass2 = document.getElementById("pass-2").value; //obtengo el valor del input nombre
	var nombrenew = document.getElementById("nombrenew").value; //obtengo el valor del input nombre                        
	var apellidonew = document.getElementById("apellidonew").value; //obtengo el valor del input nombre      
	var rutnew = document.getElementById("rutnew").value; //obtengo el valor del input nombre
	var sexoption = document.getElementById("sexoption").value; //obtengo el valor del input nombre
	var checknews = document.getElementById("checknews");


	if (emailnew.length > 0) {
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!regex.test(emailnew)) {
			document.getElementById("msgnew").innerText = "Ingrese un correo valido";
		} else {
			document.getElementById("msgnew").innerText = "";
			datos["correo"] = emailnew;
		}

	}

	if (pass1.length < 5) {
		document.getElementById("msgnewp1").innerText = "Ingrese una contraseña de min 5 caracteres";
	} else {
		document.getElementById("msgnewp1").innerText = "";
		datos["pass1"] = pass1;
	}

	if (pass2 != pass1) {
		document.getElementById("msgnewp2").innerText = "Las contraseñas deben ser iguales";
	} else {
		document.getElementById("msgnewp2").innerText = "";
		datos["pass2"] = pass2;
	}

	if (nombrenew.length < 3) {
		document.getElementById("msgnewname").innerText = "Ingrese un nombre";
	} else {
		document.getElementById("msgnewname").innerText = "";
		datos["nombrenew"] = nombrenew;
	}

	if (apellidonew.length < 3) {
		document.getElementById("msgnewape").innerText = "Ingrese un apellido";
	} else {
		document.getElementById("msgnewape").innerText = "";
		datos["apellidonew"] = apellidonew;
	}


	if (rutnew.length < 9) {
		document.getElementById("msgnewrut").innerText = "Ingrese Rut valido";
	} else {
		document.getElementById("msgnewrut").innerText = "";
		datos["rutnew"] = rutnew;
	}

	if (nombrenew.length == "" || !regex.test(emailnew) || apellidonew.length == "" || rutnew.length == "" || pass1.length == "" || pass2.length == "" || pass1 != pass2) {
		swal("Error", "Favor completar todos los datos", "warning", {
			button: "Cerrar!",
		});
	} else {
		swal({
			title: "Registro Exitoso!",
			text: "Hola, " + nombrenew + " Bienvenido a la plataforma de compra proximamente podras comprar directarmente desde el sitio",
			type: "success",
			confirmButtonText: "Cool",
			icon: "success"
		});
		document.getElementById("email-new").value = "";
		document.getElementById("pass-1").value = "";
		document.getElementById("pass-2").value = "";
		document.getElementById("nombrenew").value = "";
		document.getElementById("apellidonew").value = "";
		document.getElementById("rutnew").value = "";

		datos["sexoption"] = sexoption;

		if (checknews.checked == true) {
			datos["checknews"] = "si deseo recibir";
		} else {
			datos["checknews"] = "no deseo recibir";
		}

		//datos["checknews"]=checknews;


		console.log(datos);
		window.location.href = "#"

	}


}
/**fin crear cuenta **/