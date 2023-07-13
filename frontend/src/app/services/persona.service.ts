import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/enviroments/environents';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService
{

  private myAppUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient)
  {
    this.myAppUrl = enviroments.endpoint
    this.apiUrl = 'api/personas/'
  }

  getPersonas(): Observable<Persona[]>
  {
    return this.http.get<Persona[]>(this.myAppUrl + this.apiUrl);
  }


  public deletePersona(id: number): Observable<void>
  {
    console.log('Usted desea eliminar a la persona con id: ' + id);
    console.log('La ruta es: ' + this.myAppUrl + this.apiUrl + id)
    return this.http.delete<void>(`${this.myAppUrl}${this.apiUrl}${id}`);
  }

  public postPersona(persona: Persona): Observable<any>
  {
    console.log('El servicio ha recibido: ');
    console.table(persona);
    return this.http.post<any>(this.myAppUrl + this.apiUrl, persona);
  }

  public editarPersonaNombre(id: number, nombre: string): Observable<void>
  {
    const completarURL = 'editarNombre/';
    return this.http.put<void>(this.myAppUrl + this.apiUrl + completarURL + id, nombre);
  }

  public editarPersonaApellido(id: number, apellido: string): Observable<Persona[]>
  {
    return this.http.delete<Persona[]>(this.myAppUrl + this.apiUrl);
  }
}
