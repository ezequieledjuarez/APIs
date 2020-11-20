# API de Pokémon

# Listado de rutas

## GET 
#### ¡Atapalos a todos!
    * localhost:3000/pokemon/catchemall
    Devuelve la lista completa de todos los pokémons almacenados en la base de datos
#### ¿Y si mejor usas la RotomDex?
    * localhost:3000/pokemon/pokedex/:dexNumber
    Devuelve uno o más registros que coincidad con el número de la RotomDex indicado a través de :dexNumber
#### ¿Cómo que ya hay 8 generaciones?
    * localhost:3000/generations/:generation
    Devuelve todos los pokémons incorporados en la generación seleccionada. Dentro de :generation, sólo se admite el nombre de una región, por ej: kanto.

## POST 
#### Bienvenido
    * localhost:3000/trainer/register
    Ingresa : un nombre, una contraseña y un rol, y listo, ya estás registrado.

#### ¿Ya te registraste?, loggeate y disfruta de tu pase por las rutas que se listan a continuación.
    * localhost:3000/trainer/signin
    Ingresa tu nombre y contraseña para obtener un token. Este token te será solicitado en las rutas para crear, actualizar o eliminar los datos de un pokémon, así también para actualizar tus datos o borrar tu cuenta.

#### ¿Otro Mewtwo?
    *localhost:3000/pokemon/creator
    Ingresando tu token por headers, podrás acceder a crear un nuevo pokémon.
    
## PUT 
#### ¿Modificaciones genéticas?
    *localhost:3000/pokemon/experiments/:theChosen
    Permite modificar los datos del pokémon seleccionado a través de su id, este deberá ingresarse en el parámetro :theChosen
#### ¿Tus datos están desactualizados? No te preocupes
    *localhost:3000/trainer/changethis
    Te permite modificar tu nombre, rol o contraseña a través de tu id, que deberá ser ingresado en el body de la petición.

## Delete

#### Exterminio total
    *localhost:3000/exterminium/:anihilation
    Borra definitivamente el registro de un pokémon, a través de su id, este deberá incluirse en el parámetro :anihilation

#### ¡Eso es todo amigos!
    *localhost:3000/trainer/bye
    Borra definitivamente tus datos, ya no podrás loggearte a través de ellos y en caso de querer hacerlo, deberás crear una nueva cuenta.

## Datos útiles
    * La contraseña para los entrenadores cargados en la base de datos es 123123