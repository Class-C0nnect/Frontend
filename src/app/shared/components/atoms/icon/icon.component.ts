import { AfterViewInit, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() src: string = '';  // Texto del encabezado
  @Input() class: string = ''; 
}
