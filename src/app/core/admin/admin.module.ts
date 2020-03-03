import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule,
  AccordionModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './instruction-detail/instruction-detail.component';
import { DatabaseRigComponent } from './database-rig/database-rig.component';
import { DatabaseLocationComponent } from './database-location/database-location.component';
import { DatabaseVendorComponent } from './database-vendor/database-vendor.component';
import { NoticeComponent } from './notice/notice.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    InstructionListComponent,
    InstructionDetailComponent,
    DatabaseRigComponent,
    DatabaseLocationComponent,
    DatabaseVendorComponent,
    NoticeComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot()
  ]
})
export class AdminModule { }
