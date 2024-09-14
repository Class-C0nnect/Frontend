import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrl: './url.component.css'
})
export class UrlComponent {
  @Input() href: string = '';  // Texto del encabezado
  @Input() class: string = '';
  @Input() text: string = '';
}
