import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-brackets-balance',
  templateUrl: './brackets-balance.component.html',
  styleUrls: ['./brackets-balance.component.css']
})
export class BracketsBalanceComponent implements OnInit {
  StringBrackets = '';
  submitted = false;
  bracketsForm: FormGroup;
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
    this.bracketsForm = this.fb.group({
      bracketsString: ['', [Validators.required, Validators.pattern('^[^A-Za-z0-9]*$')]],
    })
  }

  // Getter to access form control
  get myForm() {
    return this.bracketsForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.bracketsForm.valid) {
      return false;
    } else {
      console.log(this.bracketsForm.value);
      this.StringBrackets = this.validBrackets(this.bracketsForm.value['bracketsString']);

    }
  }
  validBrackets(text) {
    let store = [];
    let key = {
      '(': ')',
      '[': ']',
      '{': '}',
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '(' || text[i] === '{' || text[i] === '[' ) {
        store.push(text[i]);
      }
      else {
        let list = store.pop();
        if (text[i] !== key[list]) { return text + ' is not valid'; }
      }
    }
    if(store.length !== 0){return text + ' is not valid';}
    return text + ' is valid';
  }

}


