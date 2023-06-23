const usuarios = [
    {
    nombre : "Valen",
    numDoc: "1001234",
    contrasena: "1234",
    tipo: "administrador",
    },
    {
        nombre : "Tina",
        numDoc: "1004321",
        contrasena: "4321",
        tipo: "cliente",
    }
]
let correct=false; //Usuario correcto
let cicloFin=false; 
let totalGlobal=0;
let billetesArray = [];
let totalBillete = []; 
let entrega5; //Cuántos billetes de 5000 entrega
let entrega10;
let entrega20;
let entrega50;
let entrega100;

while (cicloFin==false) {
let userID = prompt("Ingrese su documento de identidad:");
let userPassword = prompt("Ingrese su contraseña:");


for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].numDoc === userID && usuarios[i].contrasena === userPassword) 
    {
      correctUser = usuarios[i]; //Cual de los 2 usuarios ingresó
      correct = true;
      console.log(correctUser)
      break;
    }
  }

  if (correct == true) {
    if (correctUser.tipo === "administrador" ) {
      alert("Inicio de sesión exitoso como "+ correctUser.tipo);
      console.log("Inicio de sesión exitoso como "+ correctUser.tipo);

      const billetes = [5000, 10000, 20000, 50000, 100000];
      
        
        for (let b = 0; b < billetes.length; b++) {
          let cantidad = parseInt(prompt("Ingrese la cantidad de billetes de " + billetes[b] + " que va a subir:" ));
          let totalBillete = billetes[b] * cantidad; //Total de billetes por cada denominación
          billetesArray.push({ billetes: billetes[b], cantidad: cantidad, totalBillete: totalBillete });
          totalGlobal += totalBillete;
          console.log(billetesArray[b]);
        }     
      console.log("El total general es de " + totalGlobal);
      alert("El total es " + totalGlobal);
      alert("Cerrando sesión...");
      console.log("Cerrando sesión...");
      correct = false;



  } else if (correctUser.tipo === "cliente" ){
      alert("Inicio de sesión exitoso como "+ correctUser.tipo);
      console.log("Inicio de sesión exitoso como "+ correctUser.tipo);

      if (totalGlobal >0) {
        alert("Dinero disponible: " + totalGlobal)
        console.log("Dinero disponible: " + totalGlobal)
        let cantRetiro = parseInt(prompt("¿Cuánto desea retirar?"))
        let cantRetiroTotal = parseInt(0); //Va sumando el retiro satisfactorio por billete
        if (totalGlobal>=cantRetiro) {
            
            if (cantRetiro>=100000) {
              entrega100 = cantRetiro/100000;
              entrega100 = parseInt(entrega100);
              alert("El cajero entregó " + entrega100 + " billetes de 100000")
              console.log("El cajero entregó " + entrega100 + " billetes de 100000")
              cantRetiro = cantRetiro - entrega100*100000 //CantidadRetiro se resta según cuánto dinero se hayan podido entregar para ver cuánto falta
              alert("Quedan " + cantRetiro + " por retirar")
              cantRetiroTotal= cantRetiroTotal + entrega100*100000 //CantRetiroTotal suma cuánto se pudo retirar satisfactoriamente.
            }
            if (cantRetiro>=50000) {
              entrega50 = cantRetiro/50000;
              entrega50 = parseInt(entrega50);
              alert("El cajero entregó " + entrega50 + " billetes de 50000")
              console.log("El cajero entregó " + entrega50 + " billetes de 50000")
              cantRetiro = cantRetiro - entrega50*50000
              alert("Quedan " + cantRetiro + " por retirar")
              cantRetiroTotal= cantRetiroTotal + entrega50*50000
            }
            if (cantRetiro>=20000) {
              entrega20 = cantRetiro/20000;
              entrega20 = parseInt(entrega20);
              alert("El cajero entregó " + entrega20 + " billetes de 20000")
              console.log("El cajero entregó " + entrega20 + " billetes de 20000")
              cantRetiro = cantRetiro - entrega20*20000
              alert("Quedan " + cantRetiro + " por retirar")
              cantRetiroTotal= cantRetiroTotal + entrega20*20000
            }
            if (cantRetiro>=10000) {
              entrega10 = cantRetiro/10000;
              entrega10 = parseInt(entrega10);
              alert("El cajero entregó " + entrega10 + " billetes de 10000")
              console.log("El cajero entregó " + entrega10 + " billetes de 10000")
              cantRetiro = cantRetiro - entrega10*10000
              alert("Quedan " + cantRetiro + " por retirar")
              cantRetiroTotal= cantRetiroTotal + entrega10*10000
            }
            if (cantRetiro>=5000) {
              entrega5 = cantRetiro/5000;
              entrega5 = parseInt(entrega10);
              alert("El cajero entregó " + entrega5 + " billetes de 5000")
              console.log("El cajero entregó " + entrega5 + " billetes de 5000")
              cantRetiro = cantRetiro - entrega5*5000
              alert("Quedan " + cantRetiro + " por retirar")
              cantRetiroTotal= cantRetiroTotal + entrega5*5000
            }
            alert( cantRetiroTotal + " retirado con éxito.")
            console.log( cantRetiroTotal + " retirado con éxito.")
            totalGlobal = totalGlobal - cantRetiroTotal
            alert("Dinero disponible: " + totalGlobal)
            console.log("Dinero disponible: " + totalGlobal)
            alert("Cerrando sesión...")
            console.log("Cerrando sesión...")
            correct = false;
        }else{
            alert("Fondos insuficientes")
            console.log("Fondos insuficientes")
            alert("Cerrando sesión...")
            console.log("Cerrando sesión...")
            correct = false;
        }

      } else{
        console.log("Cajero en mantenimiento, vuelva pronto.")
        alert("Cajero en mantenimiento, vuelva pronto.")
        alert("Cerrando sesión...")
        console.log("Cerrando sesión...");
        correct = false;
      }
  } 
} else {
    alert("El usuario no existe. Por favor, verifique sus datos.");
  } 

  

}


/* let c5 = prompt("Ingresa cuántos billetes de 5.000 vas a ingresar")
let c10 = prompt("Ingresa cuántos billetes de 10.000 vas a ingresar")
let c20 = prompt("Ingresa cuántos billetes de 20.000 vas a ingresar")
let c50 = prompt("Ingresa cuántos billetes de 50.000 vas a ingresar")
let c100 = prompt("Ingresa cuántos billetes de 100.000 vas a ingresar")

let billetes = [5000, 10000, 20000, 50000, 10000];

suma5 = c5*5000;
suma10 = c10*10000;
suma20 = c20*20000;
suma50 = c50*50000;
suma100 = c100*100000;
const sumaTotal = suma5 + suma10 + suma20 + suma50 + suma100;

console.log("En billetes de 5000 hay " + suma5 + " pesos") */


