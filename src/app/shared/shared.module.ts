import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreLabelComponent } from './components/atoms/form-Crear-Curso/nombre-label/nombre-label.component';
import { NombreInputComponent } from './components/atoms/form-Crear-Curso/nombre-input/nombre-input.component';
import { CursoLabelComponent } from './components/atoms/form-Crear-Curso/curso-label/curso-label.component';
import { CursoInputComponent } from './components/atoms/form-Crear-Curso/curso-input/curso-input.component';
import { DescriptLabelComponent } from './components/atoms/form-Crear-Curso/descript-label/descript-label.component';
import { DescriptTextareaComponent } from './components/atoms/form-Crear-Curso/descript-textarea/descript-textarea.component';
import { BtnFormCrearCursoComponent } from './components/atoms/form-Crear-Curso/btn-form-crear-curso/btn-form-crear-curso.component';
import { DivNombreComponent } from './components/molecules/form-Crear-Curso/div-nombre/div-nombre.component';
import { DivCursoComponent } from './components/molecules/form-Crear-Curso/div-curso/div-curso.component';
import { DivDescriptComponent } from './components/molecules/form-Crear-Curso/div-descript/div-descript.component';
import { FormCrearCursoOrganismComponent } from './components/organisms/form-Crear-Curso/form-crear-curso-organism/form-crear-curso-organism.component';
import { FormCrearCursoTemplateComponent } from './components/templates/form-Crear-Curso/form-crear-curso-template/form-crear-curso-template.component';
import { H2TituloComponent } from './components/atoms/lista-Estudiantes-K/h2-titulo/h2-titulo.component';
import { ANombreComponent } from './components/atoms/lista-Estudiantes-K/a-nombre/a-nombre.component';



@NgModule({
  declarations: [
    NombreLabelComponent,
    NombreInputComponent,
    CursoLabelComponent,
    CursoInputComponent,
    DescriptLabelComponent,
    DescriptTextareaComponent,
    BtnFormCrearCursoComponent,
    DivNombreComponent,
    DivCursoComponent,
    DivDescriptComponent,
    FormCrearCursoOrganismComponent,
    FormCrearCursoTemplateComponent,
    H2TituloComponent,
    ANombreComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    NombreLabelComponent,
    NombreInputComponent,
    CursoLabelComponent,
    CursoInputComponent,
    DescriptLabelComponent,
    DescriptTextareaComponent,
    BtnFormCrearCursoComponent,
    DivNombreComponent,
    DivCursoComponent,
    DivDescriptComponent,
    FormCrearCursoOrganismComponent,
    FormCrearCursoTemplateComponent
  ]

})
export class SharedModule { }
