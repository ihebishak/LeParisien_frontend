import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService
  ) {
    translate.addLangs(['en', 'fr', 'de']);
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|de/) ? browserLang : 'en');
    translateCacheService.init();

    this.loadJsFile('assets/js/jquery.min.js');
    this.loadJsFile('assets/js/popper.min.js');
    this.loadJsFile('assets/js/bootstrap.min.js');
    this.loadJsFile('assets/js/jquery.meanmenu.js');
    this.loadJsFile('assets/js/owl.carousel.min.js');
    this.loadJsFile('assets/js/jquery.magnific-popup.min.js');
    this.loadJsFile('assets/js/jquery.nice-select.min.js');
    this.loadJsFile('assets/js/odometer.min.js');
    this.loadJsFile('assets/js/jquery.appear.js');
    this.loadJsFile('assets/js/jquery.ajaxchimp.min.js');
    this.loadJsFile('assets/js/form-validator.min.js');
    this.loadJsFile('assets/js/contact-form-script.js');
    this.loadJsFile('assets/js/wow.min.js');
    this.loadJsFile('assets/js/main.js');
  }

  public loadJsFile(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {}
}
