console.clear();

// Definieren die Funktionen showWelcomeMessage und showErrorMessage.

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

//"handleUserLogin" braucht zwei Funktionsnamen und einen Benutzernamen.
// Wenn der Benutzername "Jane Doe" ist, wird die onSucces mit dem Benutzernamen und der Rolle "admin" ausgeführt.
// Wenn der Benutzername anders ist, wird die Fehlerfunktion "showErrorMessage" mit einer Nachricht aufgerufen.
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

// Rufen handleUserLogin zweimal mit unterschiedlichen Benutzernamen als callbacks auf.

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");
handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");
