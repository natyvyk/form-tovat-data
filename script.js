const person = {
    name: prompt ("Zadejte prosím vaše jméno a příjmení:"),
    age: prompt("Zadejte prosím váš věk:"),
    window: window.navigator.language ,
}

document.body.innerHTML += "<p>" + person.name + ", " + person.age + ", preferovaný jazyk komunikace: " + person.window + "</p>"