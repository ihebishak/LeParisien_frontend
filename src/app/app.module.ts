import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateCacheModule,
  TranslateCacheService,
  TranslateCacheSettings,
} from 'ngx-translate-cache';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    ErrorComponent,
    MenuComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: (translateService, translateCacheSettings) => {
          return new TranslateCacheService(
            translateService,
            translateCacheSettings
          );
        },
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheName: 'mylang',
      cacheMechanism: 'Cookie',
      cookieExpiry: 1,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
