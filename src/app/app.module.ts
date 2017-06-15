import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { AppComponent }  from './app.component';

//import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';

import { ClickMeComponent,
         LoopbackComponent,
         KeyUpComponent_v4
} from './component/click-me.component';

@NgModule({
  imports:      [
     BrowserModule,
     FormsModule  // <--- import into the NgModule 
  ],
  declarations: [ 
    AppComponent,
    ClickMeComponent,
    LoopbackComponent,
    KeyUpComponent_v4
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
