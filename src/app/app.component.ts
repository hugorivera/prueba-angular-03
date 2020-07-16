import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Primer Nombre';
  nombre2 = 'huGo rivErA qUeveDo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1234.50;
  activar = true;

  videoUrl = 'https://www.youtube.com/embed/qJ5R9WTW0_E';

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha = new Date();
  idioma = 'es';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}
