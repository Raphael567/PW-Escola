import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  mostrarNotificacoes = false;
  notificacaoSelecionada: any = null;

  notificacoes = [
    {
      nome: 'Funcionário 1',
      descricao: 'Novo chamado na Sala 3',
      foto: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      titulo: 'Solicitação de Reparo',
      subtitulo: 'Sala 3 - Quadro branco',
      descricaoCompleta: 'Foi reportado que o quadro branco da Sala 3 está quebrado e precisa de substituição.',
      visible: true
    },
    {
      nome: 'Funcionário 2',
      descricao: 'Novo chamado no Lab. 8',
      foto: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      titulo: 'Equipamento com defeito',
      subtitulo: 'Laboratório 8 - Computador 4',
      descricaoCompleta: 'O computador 4 do Lab. 8 não está ligando. Pode ser um problema na fonte.'
    },
    {
      nome: 'Funcionário 3',
      descricao: 'Novo chamado no Lab. 5',
      foto: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      titulo: 'Solicitação de Equipamento novo',
      subtitulo: 'Laboratório 5 - Computador 2',
      descricaoCompleta: 'O computador 2 do Lab. 5 não está dando imagem. Pode ser um problema no monitor.'
    }
  ];

  toggleNotificacoes() {
    this.mostrarNotificacoes = !this.mostrarNotificacoes;
    this.notificacaoSelecionada = null;
  }

  selecionarNotificacao(n: any) {
    this.notificacaoSelecionada = n;
  }

  aprovar() {
    alert('Chamado aprovado! (UPDATE)');
    if (!this.notificacaoSelecionada) return;

    this.notificacoes = this.notificacoes.filter(n => n !== this.notificacaoSelecionada);

    this.notificacaoSelecionada = null;
 }

  reprovar() {
    alert('Chamado reprovado. (DELETE)');

    if (!this.notificacaoSelecionada) return;

    this.notificacoes = this.notificacoes.filter(n => n !== this.notificacaoSelecionada);

    this.notificacaoSelecionada = null;
  }
}

