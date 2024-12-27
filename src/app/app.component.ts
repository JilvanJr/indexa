import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ListaContatosComponent } from "./paginas/lista-contatos/lista-contatos.component";
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormularioContatoComponent,
    ListaContatosComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}