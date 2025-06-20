import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  codigo = '';
  login = '';
  senha = '';
  showSenha = false;
  dropdownAberto = false;
  tipoUsuarioSelecionado = '';

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  selecionarTipo(tipo: string) {
    this.tipoUsuarioSelecionado = tipo;
    this.dropdownAberto = false;
  }

  toggleSenha() {
    this.showSenha = !this.showSenha;
    const inputSenha = document.getElementById('senha') as HTMLInputElement;
    if (inputSenha) {
      inputSenha.type = this.showSenha ? 'text' : 'password';
    }
  }

    onSubmit() {
    const codValido = ['063', '064', '065'].includes(this.codigo);

    const usuario = this.login;
    const senha = this.senha;
    const tipo = this.tipoUsuarioSelecionado;

    const loginAlunoValido = tipo == 'Aluno' && codValido &&
      (
        (usuario == 'Hellen' && senha == '123456') ||
        (usuario == 'Raphael' && senha == 'abcde')
      );

    const loginGestorValido = tipo == 'Gestor' && codValido &&
      usuario == 'Marion' && senha == '102030';

    const loginEscolaValido = tipo == 'Escola' && codValido &&
      usuario == 'Kelly' && senha == '123456';

    if (loginAlunoValido || loginGestorValido || loginEscolaValido) {
      this.router.navigate(['/home']);
    } else {
      alert('ACESSO INVÁLIDO. Verifique o tipo de acesso, usuário, senha ou código da ETEC.');
    }
  }
}

