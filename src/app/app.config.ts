import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { 
  PoUiJsonFormsModule, 
  PO_UI_FORMLY_TYPES,
  FormlyFieldPoInput,
  FormlyFieldPoNumber,
  FormlyFieldPoEmail,
  FormlyFieldPoPassword,
  FormlyFieldPoTextarea,
  FormlyFieldPoSelect,
  FormlyFieldPoDatepicker,
  FormlyFieldPoDatepickerRange,
  FormlyFieldPoCheckboxGroup,
  FormlyFieldPoRadioGroup,
  FormlyFieldPoCombo,
  FormlyFieldPoCheckbox,
  FormlyFieldPoLookup,
  FormlyFieldPoMultiselect,
  FormlyFieldPoSwitch
} from 'po-ui-json-forms';
import { routes } from './app.routes';

const FORMLY_TYPES_CONFIG = [
  { name: 'po-input', component: FormlyFieldPoInput },
  { name: 'po-number', component: FormlyFieldPoNumber },
  { name: 'po-email', component: FormlyFieldPoEmail },
  { name: 'po-password', component: FormlyFieldPoPassword },
  { name: 'po-textarea', component: FormlyFieldPoTextarea },
  { name: 'po-select', component: FormlyFieldPoSelect },
  { name: 'po-datepicker', component: FormlyFieldPoDatepicker },
  { name: 'po-datepicker-range', component: FormlyFieldPoDatepickerRange },
  { name: 'po-checkbox-group', component: FormlyFieldPoCheckboxGroup },
  { name: 'po-radio-group', component: FormlyFieldPoRadioGroup },
  { name: 'po-combo', component: FormlyFieldPoCombo },
  { name: 'po-checkbox', component: FormlyFieldPoCheckbox },
  { name: 'po-lookup', component: FormlyFieldPoLookup },
  { name: 'po-multiselect', component: FormlyFieldPoMultiselect },
  { name: 'po-switch', component: FormlyFieldPoSwitch }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      FormlyModule.forRoot({
        types: FORMLY_TYPES_CONFIG
      })
    )
  ]
};
