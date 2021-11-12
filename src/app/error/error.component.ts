import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService
  ) {
    translate.addLangs(['en', 'fr', 'de']);
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');
    translateCacheService.init();
  }

  ngOnInit(): void {}
}
