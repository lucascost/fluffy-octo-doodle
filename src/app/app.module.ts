import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatrizComponent } from './matriz/matriz.component';
import { CelulaComponent } from './celula/celula.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrizComponent,
    CelulaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
