require('dotenv').config(); 
const app = require('./app');
const PORT = 5500;

try {   //try-catch para manejar errores en caso de tenerlo cuando levantamos el servidor
    app.listen(PORT, () => {    //Escuchamos al puesto PORT
        console.log(`Server en puerto ${PORT}`);
        
    });
} catch (error) {
    console.log(`Error en puerto ${PORT}`, error);  //En caso de error veremos esto en nuestra consola
}