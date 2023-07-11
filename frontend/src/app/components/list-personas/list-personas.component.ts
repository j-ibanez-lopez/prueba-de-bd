import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona.interface';
import { AgregarEditarPersonasComponent } from '../agregar-editar-personas/agregar-editar-personas.component';


@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements AfterViewInit
{

  fecha: Date = new Date()

  @ViewChild(MatPaginator)
  paginador!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  LISTA: Persona[] = [
    { id: 1,
      nombre: 'Joaquín',
      apellido: 'Ibáñez',
      correo: 'jandresilopez@gmail.com',
      tipoDocumento: 'Carnet',
      documento: 123456,
      fechaDeNacimiento: '01/22/1996'
    },
    {
      id: 2,
      nombre: 'José Pato',
      apellido: 'Kreutzberger',
      correo: 'donPato@gmail.com',
      tipoDocumento: 'Carnet',
      documento: 12233256,
      fechaDeNacimiento: '05/07/1995'
    },
    {
      id: 3,
      nombre: 'Jorge',
      apellido: 'Valdivia',
      correo: 'magoValdivia@gmail.com',
      tipoDocumento: 'Carnet',
      documento: 12298766,
      fechaDeNacimiento: '01/07/1994'
    },
  ]

  public mensaje: string = '';
  public fuente = new MatTableDataSource<Persona>(this.LISTA)

  constructor(public dialog: MatDialog)
  {}

  ngAfterViewInit()
  {
    // Notese que debe editarse esto directamente al paginador.
    this.paginador._intl.itemsPerPageLabel = 'Cantidad de filas';
    this.fuente.paginator = this.paginador;
    this.fuente.sort = this.sort;
  }

  public brindar_mensaje(): void {
    this.mensaje = 'Hola Mundo';
  }



  nombre_columnas = ['id', 'nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'FechaDeNacimiento', 'editar', 'eliminar'];

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
    // Se hará?
  }

  eliminar(event: Persona)
  {
    const indice = this.recorrido(event);
    console.log(indice + ' está en la posición ' + indice)
    this.LISTA.splice(indice)
    this.fuente.data = this.LISTA
  }


  recorrido(evento: Persona): number
  {
    let valorRetorno = -1000
    this.LISTA.forEach( (elemento, indice) => {
      if (elemento.id == evento.id)
      {
        console.log('¿Habré entrado aquí?')
        valorRetorno = indice;
      }
      else
        valorRetorno = -1
    })
    return valorRetorno
  }
}

