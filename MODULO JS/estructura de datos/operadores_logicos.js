

// operadores logicos

// tenemos 3
// - OR se representa con los simbolos ||
// - AND se representa con los simbolos &&
// - NOT representa con el simbolo !



// - OR se representa con los simbolos ||
let isAdminRol = true;
let isUserAnonymous = false;
let email = "";
let precio = 3;


// al menos "uno de los objetos" debe representar verdado para evaluar verdadero (true)
isAdminRol || isUserAnonymous;
isUserAnonymous || isAdminRol;

email || isAdminRol;



// - AND se representa con los simbolos &&
// ambos objetos deben representar verdadero para evaluar verdadero (true)

email && isAdminRol;
isUserAnonymous && isAdminRol;





// - NOT representa con el simbolo !
!isUserAnonymous;
!isAdminRol;