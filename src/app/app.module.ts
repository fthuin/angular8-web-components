import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { NgCardElementComponent } from './ng-card-element/ng-card-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    // AppComponent,
    NgCardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [NgCardElementComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    customElements.define('facebook-card', el);
  }
}
