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
import { ButtonsComponent } from './components/atoms/refactorizacion/buttons/buttons.component';
import { H1Component } from './components/atoms/refactorizacion/h1/h1.component';
import { H2Component } from './components/atoms/refactorizacion/h2/h2.component';
import { H3Component } from './components/atoms/refactorizacion/h3/h3.component';
import { IconComponent } from './components/atoms/refactorizacion/icon/icon.component';
import { PComponent } from './components/atoms/refactorizacion/p/p.component';
import { UrlComponent } from './components/atoms/refactorizacion/url/url.component';
import { SubpaginasComponent } from './components/molecules/subpaginas/subpaginas.component';


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
    ANombreComponent,
    ButtonsComponent,
    H1Component,
    H2Component,
    H3Component,
    IconComponent,
    PComponent,
    UrlComponent,
    SubpaginasComponent
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
    FormCrearCursoTemplateComponent,
    H2TituloComponent,
    ANombreComponent,
    ButtonsComponent,
    H1Component,
    H2Component,
    H3Component,
    IconComponent,
    PComponent,
    UrlComponent,
    SubpaginasComponent
  ]

})
export class SharedModule { }
