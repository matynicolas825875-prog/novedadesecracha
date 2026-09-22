const mainImage = document.getElementById("mainImage");
document.querySelectorAll(".thumbs button").forEach(btn => {
  btn.addEventListener("click", () => {
    const label = btn.dataset.label;
    
    // Si el archivo termina en mp4, muestra el video en grande
    if (label.toLowerCase().endsWith(".mp4")) {
        mainImage.innerHTML = `<video src="img/${label}" controls autoplay style="width: 100%; height: 100%; object-fit: contain; display: block;"></video>`;
    } else {
        // Si es una imagen, la muestra en grande perfectamente ajustada
        mainImage.innerHTML = `<img src="img/${label}" style="width: 100%; height: 100%; object-fit: contain; display: block;">`;
    }
  });
});

const form=document.getElementById("orderForm");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const whatsapp="593958639287";
  const msg =
`Hola NovedadesEc 👋, quiero realizar un pedido:

Producto:Filtro y purificador de agua
Precio: $19.99
Nombre: ${data.get("nombre")}
Teléfono: ${data.get("telefono")}
Provincia: ${data.get("provincia")}
Ciudad: ${data.get("ciudad")}
Dirección: ${data.get("direccion")}
Cantidad: ${data.get("cantidad")}

Quedo atento/a para confirmar mi pedido.`;
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
});