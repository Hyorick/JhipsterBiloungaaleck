import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhispterBiloungaaleckSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JhispterBiloungaaleckSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
