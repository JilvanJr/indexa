import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    { "id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "ana@email.com"},
    { "id": 2, "nome": "Ágata", "telefone": "38 128451235", "email": "agata@email.com"},
    { "id": 3, "nome": "Bruno", "telefone": "95 695521583", "email": "bruno@email.com"},
    { "id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email": "beatriz@email.com"},
    { "id": 5, "nome": "Carlos", "telefone": "94 543197849", "email": "carlos@email.com"},
    { "id": 7, "nome": "Daniel", "telefone": "56 613692441", "email": "daniel@email.com"}
  ]

  constructor() {
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage =
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }

    // Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
