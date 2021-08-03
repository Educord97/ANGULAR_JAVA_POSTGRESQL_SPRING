import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato-update',
  templateUrl: './contato-update.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoUpdateComponent implements OnInit {

  formulario: FormGroup;
  contatos: Contato[] = [];

  constructor(
    private service: ContatoService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.montarFormulario();
  }

  montarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email ]]
    })
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

  previous(): void{
    window.history.back();
  }

}
