fetch('http://api.open-notify.org/iss-now.json')
  .then(response => response.json())
  .then(data => {
    
    // Zpracování dat
    const { latitude, longitude } = data.iss_position
    
    // Připojení na element
    const newLatitude = document.getElementById("latitude")
    newLatitude.textContent = `${latitude}`
    
    const newLongitude = document.getElementById("longitude")
    newLongitude.textContent = `${longitude}`
})


// Pro hlášení chyby
.catch( (error) => {
  const errorParagrap = document.createComment("p")
    errorParagrap.textContent = `Chyba při načítání dat z API: ${error}`

  document.body.appendChild(errorParagrap)
})