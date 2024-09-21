import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrl: './p.component.css'
})
export class PComponent {
  @Input() text: string = '';  // Texto del encabezado
  @Input() class: string = ''; // Clases CSS adicionales
}
