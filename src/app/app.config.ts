import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { routes } from './app.routes';
import { 
  FormlyFieldPoInput,
  FormlyFieldPoNumber,
  FormlyFieldPoEmail,
  FormlyFieldPoPassword,
  FormlyFieldPoTextarea,
  FormlyFieldPoSelect,
  FormlyFieldPoDatepicker,
  FormlyFieldPoCheckboxGroup,
  FormlyFieldPoRadioGroup,
  FormlyFieldPoCombo,
  FormlyFieldPoCheckbox
} from './formly-types';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      FormlyModule.forRoot({
        types: [
          { name: 'po-input', component: FormlyFieldPoInput },
          { name: 'po-number', component: FormlyFieldPoNumber },
          { name: 'po-email', component: FormlyFieldPoEmail },
          { name: 'po-password', component: FormlyFieldPoPassword },
          { name: 'po-textarea', component: FormlyFieldPoTextarea },
          { name: 'po-select', component: FormlyFieldPoSelect },
          { name: 'po-datepicker', component: FormlyFieldPoDatepicker },
          { name: 'po-checkbox-group', component: FormlyFieldPoCheckboxGroup },
          { name: 'po-radio-group', component: FormlyFieldPoRadioGroup },
          { name: 'po-combo', component: FormlyFieldPoCombo },
          { name: 'po-checkbox', component: FormlyFieldPoCheckbox }
        ]
      })
    )
  ]
};
