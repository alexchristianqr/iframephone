(function () {
  // Set url del sitio web
  const sourceOrigin = validateSource()

  // Controlar iframe
  const iframe = document.querySelector('iframe')
  iframe.setAttribute('src', sourceOrigin)

  /**
   * Funcion para validar el recurso del sitio web a cargar
   * @returns {string}
   */
  function validateSource () {
    /*
    https://alexchristianqr.github.io/foryou
    https://alexchristianqr.github.io/portfolio
    */
    let srcOrigin = null
    let srcDefault = 'https://www.entel.pe/'
    const uri = window.location.href
    const arrayLocations = uri.split('?')
    if (!arrayLocations[1]) return srcDefault
    srcOrigin = arrayLocations[1].replace('src=', '')
    if (!srcOrigin || srcOrigin === '') return srcDefault
    return srcOrigin
  }
})()
