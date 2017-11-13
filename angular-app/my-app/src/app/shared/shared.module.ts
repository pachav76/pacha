import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';
import { SomeService } from './services/some.service';

@NgModule({
  exports: [ApiService, SomeService]
})
export class SharedModule { }