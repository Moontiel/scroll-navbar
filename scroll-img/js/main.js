/* 
	$scrollNavbar: alamacena el elemento html al cual le 
    vamos a aplicar el efecto scroll
*/
let $scrollNavbar = document.querySelector('#scroll-navbar');

/* 
    generamos un evento scroll en el objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura en el eje Y es mayor a 70 
        añadimos a $scrollNavbar la clase js_scroll_navbar 
		definida en la hoja de estilos
    */
	if (window.pageYOffset > 70) {
		$scrollNavbar.classList.add('js_scroll_navbar');
	} else {
		/* 
            de lo contrario removemos de $scrollNavbar 
            la clase
        */
		$scrollNavbar.classList.remove('js_scroll_navbar');
	}
});
