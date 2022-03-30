import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  formAgregar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  get contactFormGroup(): FormArray {
    return this.formAgregar.get('contactos') as FormArray;
  }

  createForm() {
    this.formAgregar = this.fb.group({
      id: ['20'],
      contactos: this.fb.array([]),
    });
  }

  get createContact(): FormGroup {
    return this.fb.group({
      name: ['aa'],
      telefonos: this.fb.array([this.createPhone]),
    });
  }

  get createPhone(): FormGroup {
    return this.fb.group({
      type: ['Cel'],
      number: ['488 000 000'],
    });
  }

  addContact() {
    this.contactFormGroup.push(this.createContact);
  }

  deleteContact(index) {
    this.contactFormGroup.removeAt(index);
  }

  addPhone(contact: any) {
    contact.get('telefonos').push(this.createPhone);
  }

  deletePhone(contact, index) {
    contact.get('telefonos').removeAt(index);
  }

  enviarForm(event) {
    console.log(event);
  }
}
