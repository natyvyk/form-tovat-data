const fahrnheit = prompt ("Uveďte teplotu ve stupních Fahrenheita:")
const celsius = Number((5*(fahrnheit-32))/9)

document.body.innerHTML += "<p>" + fahrnheit + " stupňů fahrenheita je " + celsius + " stupňů celsia. </p>"