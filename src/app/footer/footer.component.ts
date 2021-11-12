import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
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

  ngOnInit(): void { }
}
