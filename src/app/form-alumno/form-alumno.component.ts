import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent {

  //alamcenar datos del formulario
  @ViewChild('registerForm') registerForm: NgForm 
  //comprobar si se ha enviado el formualario
  isSubmitted = false
  generos = ['Hombre','Mujer']
  defaultGenero = 'Mujer'  
  //user object
  alumno: Alumno = {
    nombre: '',
    apellido: '',
    edad: 0,
    genero: ''
  }

  submit(){
    this.isSubmitted = true

    //rellenar los datos del alumno
    this.alumno.nombre = this.registerForm.value.alumnoData.nombre
    this.alumno.apellido = this.registerForm.value.alumnoData.apellido
    this.alumno.edad = this.registerForm.value.alumnoData.edad
    this.alumno.genero = this.registerForm.value.genero
    //resetear datos del formulario
    this.registerForm.reset()

  }
}
