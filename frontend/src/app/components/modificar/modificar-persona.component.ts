import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.css']
})

export class ModificarPersonaComponent
{
  public lista: string[] = ['Nombre', 'Apellido', 'Correo', 'documento'];
  caracteristica: FormGroup

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<ModificarPersonaComponent>,
    private _servicio: PersonaService,
    @Inject(MAT_DIALOG_DATA) public data: string
  )
  {
    this.caracteristica = this.builder.group(
      {
        elemento: [null, Validators.required],
        valor: ['', Validators.required]//, Validators.pattern = '[a-zA-Z0-9]']]
      }
    );
  }

  editar()
  {
    console.log('El valor a recibir es: ', this.caracteristica.value);
    console.log(' Me funciona el valor "elemento": ', this.caracteristica.value.elemento);
    switch( this.caracteristica.value.elemento)
    {
      case 'Nombre':
        // this._servicio.editarPersonaNombre(this.caracteristica.value.valor, 0)
    }

    this.cerrar()
  }

  cerrar()
  {
    this.dialogRef.close();
  }
}
