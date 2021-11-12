import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';
import { ContactService } from '../api/contact.service';
import { Contact } from '../Bean/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact = new Contact();
  formData = new FormData();

  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private contactService: ContactService
  ) {
    translate.addLangs(['en', 'fr', 'de']);
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');
    translateCacheService.init();
  }

  ngOnInit(): void {}

  createContact(contact) {
    this.contactService.createContact(contact).subscribe(
      (data) => console.log('contact created successfully ', data),
      (error) => console.log('erreur in creating contact', error)
    );
  }

  contactUs(formData) {
    this.contactService.contactUs(formData).subscribe(
      (data) => console.log('mail contact sent', data),
      (error) => console.log('erreur in sending mail', error)
    );
  }

  submit() {
    this.formData.append('fullname', this.contact.fullName);
    this.formData.append('email', this.contact.email);
    this.formData.append('phone', this.contact.phone);
    this.formData.append('subject', this.contact.subject);
    this.formData.append('comment', this.contact.message);
    this.contactUs(this.formData);
    this.createContact(this.contact);
  }
}
