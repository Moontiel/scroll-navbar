/* 
	headerScroll: alamacena el elemento html con el ID header-scroll
*/
let headerScroll = document.querySelector('#header-scroll');

/* 
    generamos un evento scroll en el objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 90
        (altura del header en la pagina oficial)
        añadimos a headerScroll la clase js_header_scroll
        definida en la hoja de estilos
    */
	if (window.pageYOffset > 90) {
		headerScroll.classList.add('js_header_scroll');
	} else {
		/* 
            de lo contrario removemos la clase js_header_scroll
        */
		headerScroll.classList.remove('js_header_scroll');
	}
});

