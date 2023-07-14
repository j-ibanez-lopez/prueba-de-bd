import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona.interface';
import { AgregarEditarPersonasComponent } from '../agregar-editar-personas/agregar-editar-personas.component';
import { PersonaService } from 'src/app/services/persona.service';
import { Observable } from 'rxjs';
import { ModificarPersonaComponent } from '../modificar/modificar-persona.component';


@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements AfterViewInit
{

  fecha: Date = new Date()
  nombre_columnas = ['id', 'nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'FechaDeNacimiento', 'editar', 'eliminar'];

  @ViewChild(MatPaginator)
  paginador!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  LISTA: Persona[] = [
    // { id: 1,
    //   nombre: 'Joaquín',
    //   apellido: 'Ibáñez',
    //   correo: 'jandresilopez@gmail.com',
    //   tipoDocumento: 'Carnet',
    //   documento: 123456,
    //   fechaDeNacimiento: '01/22/1996'
    // },
    // {
    //   id: 2,
    //   nombre: 'José Pato',
    //   apellido: 'Kreutzberger',
    //   correo: 'donPato@gmail.com',
    //   tipoDocumento: 'Carnet',
    //   documento: 12233256,
    //   fechaDeNacimiento: '05/07/1995'
    // },
    // {
    //   id: 3,
    //   nombre: 'Jorge',
    //   apellido: 'Valdivia',
    //   correo: 'magoValdivia@gmail.com',
    //   tipoDocumento: 'Carnet',
    //   documento: 12298766,
    //   fechaDeNacimiento: '01/07/1994'
    // }
  ]

  public mensaje: string = '';
  public fuente: MatTableDataSource<Persona> = new MatTableDataSource();

  constructor(public dialog: MatDialog, private _personaService: PersonaService)
  {}

  ngAfterViewInit()
  {

    this.obtenerPersonas()
    // Notese que debe editarse esto directamente al paginador.
    this.paginador._intl.itemsPerPageLabel = 'Cantidad de filas';
    this.fuente.paginator = this.paginador;
    this.fuente.sort = this.sort;
  }

  obtenerPersonas()
  {
    console.log('Bueno. Estoy en el método obtenerPersona.');
    console.log('Se contactó al servicio y al método que conecta la bd');
    console.log();

    this._personaService.getPersonas().subscribe(data =>
      {
        console.log(data);
        console.log(data[0]);
        // console.log(Date(data[0].fechaDeNacimiento));

        this.fuente.data = data

        data.forEach((persona) =>
        {
          console.log('persona: ' + persona.nombre);

          console.log(persona.fechaDeNacimiento);
          console.log('Y su tipo es: ' + typeof(persona.fechaDeNacimiento));

          // -------
          // const correccion_fecha = persona.fechaDeNacimiento.
          // this.LISTA.push(persona);

        })
      }
    )


  }


  public brindar_mensaje(): void {
    this.mensaje = 'Hola Mundo';
  }

  calcularEdad(fecha_nacimiento: Date): number
  {
    return new Date().getFullYear() - fecha_nacimiento.getFullYear();
  }

  impresion(event: Event): void
  {
    console.log("Funciona")
    const valor = (event.target as HTMLInputElement).value;
    this.fuente.filter = valor.trim().toLowerCase();
  }

  agregar(): void
  {
    console.log("Funciona")
    const dialogo = this.dialog.open(AgregarEditarPersonasComponent, {

      width: '300vw',
    })
    dialogo.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editar()
  {
    const interaccion = this.dialog.open(ModificarPersonaComponent,
      {
        width: '200vw'
      }
    )

    interaccion.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  eliminar(event: Persona)
  {
    // const indice = this.recorrido(event);

    // console.log('Que obtuve del método recorrido: ' + indice);
    // console.log(indice + ' está en la posición ' + indice)
    // this.LISTA.splice(event.id, 1)
    // this.fuente.data = this.LISTA

    console.log('Luego de aplicar Filter.');
    console.log(this.fuente.data)

    this._personaService.deletePersona(event.id).subscribe( () => {
      console.log()
      this.fuente.data = this.fuente.data.filter( persona => persona.id != event.id);

    });
  }


  // recorrido(evento: Persona): number
  // {
  //   let valorRetorno = -1000
  //   console.log('Esto proximo a buscar el valoe')
  //   console.log('El indice es: ' + evento.id);
  //   this.fuente.data.forEach( (elemento, indice) => {
  //     console.log('1.- ¿Entré al forEach?');
  //     console.log();
  //     console.log('2.- Elemento: ' + elemento);
  //     console.log('2.5.- Más a fondo. ID del elemento: ' + elemento.id);
  //     console.log('3.- Indice: ' + indice);



  //     if (elemento.id == evento.id)
  //     {
  //       console.log('¿Habré entrado aquí?')
  //       return evento.id;
  //     }
  //     else
  //       valorRetorno = -1
  //   })
  //   return valorRetorno
  // }
}

