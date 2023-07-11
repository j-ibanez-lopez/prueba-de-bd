import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-agregar-editar-personas',
  templateUrl: './agregar-editar-personas.component.html',
  styleUrls: ['./agregar-editar-personas.component.css']
})
export class AgregarEditarPersonasComponent {

  id: number = 0;
  tipo_documento: string[] = ['Carnet', 'Pasaporte']
  hoy: Date = new Date();

  formulario: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AgregarEditarPersonasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona,
    private form_builder: FormBuilder
  )
  {
    this.formulario = this.form_builder.group(
      {
        nombre:   ['', [Validators.required, Validators.maxLength(20)]],
        apellido: ['', [Validators.required, Validators.maxLength(35)]],
        tipoDocumento: [null, Validators.required],
        documento: [null, [Validators.required, Validators.maxLength(9)]],
        correo:    ['', [Validators.required, Validators.email]],
        fechaDeNacimiento: [null, Validators.required]
      }
    )
  }

  cerrar()
  {
    this.dialogRef.close();
  }

  agregar()
  {
    console.table(this.formulario.value);
    this.id += 1

    console.log(this.formulario.value.fechaDeNacimiento)

    // // --
    // console.log('getUTCDate() -> ' + this.formulario.value.fechaDeNacimiento.getUTCDate())
    // console.log('getUTCFullYear() -> ' + this.formulario.value.fechaDeNacimiento.getUTCFullYear())
    // console.log('getUTCMonth() -> ' + this.formulario.value.fechaDeNacimiento.getUTCMonth())
    // console.log('getYear() -> ' + this.formulario.value.fechaDeNacimiento.getYear())
    // console.log('toDateString() -> ' + this.formulario.value.fechaDeNacimiento.toDateString())
    // console.log('toGMTString() -> ' + this.formulario.value.fechaDeNacimiento.toGMTString())
    // console.log('toUTCString() -> ' + this.formulario.value.fechaDeNacimiento.toUTCString())

    const fecha_simplificada = this.concatenar(this.formulario.value.fechaDeNacimiento.getUTCDate(),
                    this.formulario.value.fechaDeNacimiento.getUTCFullYear(),
                    this.formulario.value.fechaDeNacimiento.getUTCMonth())


    const persona: Persona = {
      id:       this.id,
      nombre:   this.formulario.value.nombre,
      apellido: this.formulario.value.apelliidos,
      correo:   this.formulario.value.correo,
      tipoDocumento:     this.formulario.value.tipoDocumento,
      documento:         this.formulario.value.documento,
      fechaDeNacimiento: fecha_simplificada
    }

    console.log()
    console.table(persona)
    this.cerrar()
  }

  concatenar(dia: number, mes: number, year: number)
  {
    return dia + '/' + mes + '/' + year;
  }

  nombre_cerrado()
  {

  }
}
