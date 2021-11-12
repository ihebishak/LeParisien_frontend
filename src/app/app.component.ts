import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'leparisian';
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
}
