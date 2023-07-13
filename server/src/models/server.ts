import express from 'express';
// Cómo la exportación es por defecto, se puede poner cualquier
// nombre a la constante importada a continuación.
import routesPersonas from '../routes/persona.routes';
// import connection from '../db/conection'
import cors from 'cors';


// También serviría desestructurando el importe
// llamando sólo a los métodos:
// import { Application } from 'express';

class Server
{
    private app: express.Application;
    private port: string;

    constructor()
    {
        this.app  = express();
        this.port = process.env.PORT || '3000';
        this.middlewares(); // Obligatorio indicarlo antes de 'this.router'
        this.router();

        console.log('He incicializado bien el servidor.')
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(` El servidor está escuchando desde el puerto ${this.port}`);
        });
    }

    middlewares() {
        console.log('Estoy en el middleware')
        this.app.use(express.json());

        // Cors
        this.app.use(cors())
    }

    router() {
        this.app.use('/api/personas', routesPersonas);
    }

    // Esto es de el ejemplo de mysql.
    // conectarDB () 
    // {
    //     connection.connect((err) => {
    //         console.log('Entré a conectar DB')
    //         // Si existe un error indicame cuál es.
    //         if (err) throw err;
    //         console.log('conexión exitosa')
    //     })
    // }
}

export default Server;