//document.getElementById("enviar").addEventListener("click", enviar);

var productos = [];
function enviar(){
    let name = document.getElementById('nombreP').value;
    let price = document.getElementById('precioP').value;
    let cantida = document.getElementById('cantidadP').value;
    //Imprime en la consola lo ingresado en el input
    console.log(name);
    console.log(price);
    console.log(cantida);


    let pre = parseFloat(price);
    let cant = parseInt(cantida);
    let subt = pre * cant;
    //Imprime en la consola los datos de sub
    console.log(pre);
    console.log(cant);
    console.log(subt);
    var objProducto = {
        nombreP : name,
        precioP : price,
        cantidadP : cantida,
        subtotal : subt
    }

    productos.push(objProducto);

    listar();

    document.getElementById("nombreP").value = "";
    document.getElementById("precioP").value = "";
    document.getElementById("cantidadP").value = "";

}
function listar (){
    let contenido = '';
    let suma = 0.0;
    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        suma += parseFloat(element.subtotal);
        contenido = contenido + '<tr><td>' + (i+1) + '</td><td>' + 
        element.nombreP + '</td><td>' + 
        element.precioP + '</td><td>' + 
        element.cantidadP + '</td><td>' + 
        element.subtotal.toFixed(2) + '</td><td>'+ 
        '<img src="image/edit.png" width="30px" onclick="modificar(' + i + ')">' + 
        '<img src="image/delete.png" width="30px" onclick="eliminar(' + i +')">' + '</td></tr>';
    }
    console.log(suma);
    let igv = suma*0.18;
    let total = suma + igv;
    document.getElementsByTagName('tbody')[0].innerHTML = contenido;
    document.getElementById('total_sub').value = suma.toFixed(2);
    document.getElementById('igv').value = igv.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
}
function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];    
        element.classList.add('dato');
    }
}
function eliminar(index){
    console.log(index);
    if (confirm("Confirmar eliminacion de producto")) {
        productos.splice(index,1);
        listar();
    }
}
function modificar(index){
    console.log(index);
    document.getElementById("nombreP").value = productos[index].nombreP;
    document.getElementById("precioP").value = productos[index].precioP;
    document.getElementById("cantidadP").value = productos[index].cantidadP;
    document.getElementById('btn_env').innerHTML = '<input type="submit" value="Modificar" class="form_subm btn_modificar" onclick="cambiar(' + index + ')">';
}
function cambiar(index){
    let name = document.getElementById('nombreP').value;
    let price = document.getElementById('precioP').value;
    let cantida = document.getElementById('cantidadP').value;
    
    console.log(name);
    console.log(price);
    console.log(cantida);
    var pre = parseFloat(price);
    var cant = parseInt(cantida);
    var subt = pre * cant;
    
    console.log(pre);
    console.log(cant);
    console.log(subt);
    var objProducto = {
        nombreP : name,
        precioP : price,
        cantidadP : cantida,
        subtotal : subt
    }
    productos[index] = objProducto;
    listar();
    document.getElementById("nombreP").value = '';
    document.getElementById("precioP").value = "";
    document.getElementById("cantidadP").value = "";
    document.getElementById('btn_env').innerHTML = '<input type="submit" class="form_subm" onclick="enviar()">';
}