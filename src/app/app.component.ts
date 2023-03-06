import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api_tmdb';

  constructor(public translate: TranslateService)  {
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('es')
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

}
