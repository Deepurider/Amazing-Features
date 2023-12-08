import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  imports: [
    AutoCompleteModule,
    CalendarModule,
    OrganizationChartModule,
    ContextMenuModule
  ],
  exports: [
    AutoCompleteModule,
    CalendarModule,
    OrganizationChartModule,
    ContextMenuModule
  ]
})
export class NgPrimeModule { }
