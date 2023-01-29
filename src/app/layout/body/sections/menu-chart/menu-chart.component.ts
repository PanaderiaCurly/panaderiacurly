import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-chart',
  templateUrl: './menu-chart.component.html',
  styles: [
  ]
})
export class MenuChartComponent {
  cartaPanes1 = [
    { titulo: "Sourdough", descripcion: "Hecho con un agente de fermentación natural, tiene un sabor ácido", precio: ("3,000") },
    { titulo: "Trigo Integral", descripcion: "Hecho con harina de trigo integral, rico en fibra y nutrientes", precio: ("2,500") },
    { titulo: "Ciabatta", descripcion: "Pan italiano con corteza crujiente y textura abierta", precio: ("4,000") },
    { titulo: "Brioche", descripcion: "Pan rico y mantecoso con textura suave y esponjosa", precio: ("5,500") },
    { titulo: "Baguette", descripcion: "Pan francés largo y delgado con corteza crujiente", precio: ("2,000") },
  ]

  cartaPanes2 = [
    { titulo: "Centeno", descripcion: "Hecho con harina de centeno, tiene un sabor fuerte y terroso", precio: ("2,500") },
    { titulo: "Pumpernickel", descripcion: "Pan oscuro hecho con harina de centeno y melaza", precio: ("3,000") },
    { titulo: "Focaccia", descripcion: "Pan italiano con corteza crujiente y sabrosos toppings", precio: ("4,500") },
    { titulo: "Pan de Maíz", descripcion: "Hecho con harina de maíz, tiene una textura dulce y desmenuzable", precio: ("2,500") },
    { titulo: "Pan plano", descripcion: "Pan plano y delgado que se puede hacer con varios granos", precio: ("4,000") },
  ]

}
