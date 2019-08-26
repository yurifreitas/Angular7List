import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})

export class ContactCreateComponent implements OnInit {
  submitted = false;
  contactForm: FormGroup;
  ContactProfile: any = ['Administrador', 'Contato']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      whatsappNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.contactForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.contactForm.valid) {
      return false;
    } else {
      this.apiService.createContact(this.contactForm.value).subscribe(
        (res) => {
          console.log('Contact successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/contacts-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
