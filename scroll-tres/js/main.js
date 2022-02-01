/* 
	headerScroll: alamacena la caja section_header a la 
    cual le vamos a aplicar el efecto scroll
*/
let headerScroll = document.querySelector('#header_scroll');

/* 
	flexScroll: alamacena la caja flex_container a la 
    cual le vamos a aplicar el efecto scroll
*/
let flexScroll = document.querySelector('#flex_scroll');

/* 
    generamos un evento scroll al objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 100 
        añadimos a headerScroll y flexScroll una 
        clase definida en la hoja de estilos
    */
	if (window.pageYOffset > 100) {
		headerScroll.classList.add('js_scroll');
		flexScroll.classList.add('js_flex_scroll');
	} else {
		/* 
            de lo contrario removemos de headerScroll y 
            y flexScroll la clase
        */
		headerScroll.classList.remove('js_scroll');
		flexScroll.classList.remove('js_flex_scroll');
	}
});
