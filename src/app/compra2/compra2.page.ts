import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-compra2',
  templateUrl: './compra2.page.html',
  styleUrls: ['./compra2.page.scss'],
})
export class Compra2Page implements OnInit {

  IHMForm: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.IHMForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      nif: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      nPorta: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      codPostal1: ['', [Validators.required]],
      codPostal2: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.IHMForm.valid) {
      return false;
    } else {
      console.log(this.IHMForm.value);
    }
  }

  get formControls() {
    return this.IHMForm.controls;
  }

}
