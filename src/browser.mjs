import loadCSS from 'fg-loadcss'
import FontFaceObserver from 'fontfaceobserver'
loadCSS.loadCSS('https://fonts.googleapis.com/css?family=Arimo:400,700')

new FontFaceObserver('Arimo').load().then(() => {
  document.documentElement.classList.add('webfont-ready')
})
