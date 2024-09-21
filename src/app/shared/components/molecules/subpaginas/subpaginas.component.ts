import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-subpaginas',
  templateUrl: './subpaginas.component.html',
  styleUrl: './subpaginas.component.css'
})
export class SubpaginasComponent implements OnInit {
  menuOpen = false;
  tooltipVisible: { [key: number]: boolean } = { 1: false, 2: false, 3: false };
  isMobile = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  // Detectar si es móvil
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Define que sea móvil si el ancho es menor o igual a 768px
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Para mostrar el tooltip al pasar el cursor (solo en pantallas grandes)
  showTooltip(index: number) {
    if (!this.isMobile) {
      this.tooltipVisible[index] = true;
    }
  }

  hideTooltip(index: number) {
    if (!this.isMobile) {
      this.tooltipVisible[index] = false;
    }
  }

  // Para mostrar el tooltip con clic (solo en dispositivos móviles)
  toggleTooltip(index: number) {
    if (this.isMobile) {
      this.tooltipVisible[index] = !this.tooltipVisible[index];
    }
  }

  // Métodos para abrir y cerrar menú con hover (solo en pantallas grandes)
  openMenu() {
    if (!this.isMobile) {
      this.menuOpen = true;
    }
  }

  closeMenu() {
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }
}
