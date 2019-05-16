import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-typed-code',
  templateUrl: './typed-code.component.html',
  styleUrls: ['./typed-code.component.css']
})
export class TypedCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
      strings: ['Hola Amigos!', 'Les damos la bienvenida', 'A nuestra pagina', 'Pueblito Web.'],
      typeSpeed: 70,
      backSpeed: 70,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      loop: false
 };

    const typed = new Typed('.typed-element', options);
  }

}
