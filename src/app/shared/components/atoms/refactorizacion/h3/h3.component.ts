import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h3',
  templateUrl: './h3.component.html',
  styleUrl: './h3.component.css'
})
export class H3Component {
  @Input() text: string = '';  // Texto del encabezado
  @Input() class: string = ''; // Clases CSS adicionales
}
