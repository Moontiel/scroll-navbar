/* 
	headerScroll: alamacena la caja a la cual le vamos a
    aplicar el efecto scroll
*/
let headerScroll = document.querySelector('#header_scroll');

/* 
    generamos un evento scroll al objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 100 
        añadimos a headerScroll una clase definida en 
        la hoja de estilos
    */
	if (window.pageYOffset > 100) {
		headerScroll.classList.add('js_scroll');
	} else {
		/* 
            de lo contrario removemos de headerScroll la clase
        */
		headerScroll.classList.remove('js_scroll');
	}
});
