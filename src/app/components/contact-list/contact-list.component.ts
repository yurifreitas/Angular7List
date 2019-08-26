import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  Contact: any = [];

  constructor(private apiService: ApiService) {
    this.readContact();
  }

  ngOnInit() { }

  readContact() {
    this.apiService.getContacts().subscribe((data) => {
      this.Contact = data;
    })
  }

  removeContact(contact, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteContact(contact._id).subscribe((data) => {
        this.Contact.splice(index, 1);
      }
      )
    }
  }

}