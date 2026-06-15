import { Component, inject, Input } from '@angular/core';
import { ContactService } from '../../../../Services/contactsService';
import { EmailAddress } from '../../../../Models/EmailAddress';

@Component({
  selector: 'app-componantdetailsmock',
  imports: [],
  templateUrl: './componantdetailsmock.html',
  styleUrl: './componantdetailsmock.scss',
})
export class Componantdetailsmock {


  @Input() contact: any;

  emails: EmailAddress[] = [];

  private service = inject(ContactService);

  ngOnChanges() {

    if (!this.contact) return;

    this.service
      .getEmails(this.contact.id)
      .subscribe(res => {

        this.emails = res;
      });
  }
}
