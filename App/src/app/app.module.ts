import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common/common.component';
import { CommonService } from './common/services/common.service';
import { setCustomPrototypes } from 'src/types/prototypes';
import { NgPrimeModule } from './common/modules/ng-prime/ng-prime.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgPrimeModule
  ],
  providers: [CommonService,
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        setCustomPrototypes();
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
