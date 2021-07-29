import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';
import { ToastrService } from 'ngx-toastr';

import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  contatos: Contato[] = [];
  colunas = ['id', 'nome', 'email', 'favorito', 'delete']

  constructor(
    private service: ContatoService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.montarFormulario();
    this.listarContatos();
  }

  montarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['',[Validators.required, Validators.email ]]
    })
  }

  listarContatos() {
    this.service.list().subscribe(response => {
      this.contatos = response
    })
  }

  favoritar(contato: Contato) {
    this.service.favorite(contato).subscribe(response => {
      contato.favorito = !contato.favorito;
    })
  }

  delete(id: number) {
    this.service.delete(id).subscribe(
      data => {
        console.log('deleted response', data);
      }
    )
  }

  submit() {
    const isInvalid = this.formulario.valid;
    const formValues = this.formulario.value;
    const contato: Contato = new Contato(formValues.nome, formValues.email);
    this.service.save(contato).subscribe( resposta => {
     let lista: Contato[] = [...this.contatos, resposta]
     this.contatos = lista;
     this.showSuccess();
     this.clearForm()
    })
  }

  showSuccess() {
    this.toastr.success('Adicionado!', 'Contato adicionado com sucesso!');
  }

  clearForm() {
    this.formulario.reset({
      nome: '',
      email: ''
    })
  }

}
