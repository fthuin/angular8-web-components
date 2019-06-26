import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgCardElementComponent } from './ng-card-element/ng-card-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    NgCardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [NgCardElementComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    /**
     * This `if` should not be needed. Maybe trying w/ Ivy
     * could help.
     * https://github.com/angular/angular/issues/23732
     */
    if (!customElements.get('facebook-card')) {
      customElements.define('facebook-card', el);
    }
  }
}
