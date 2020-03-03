import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './instruction-detail/instruction-detail.component';
import { DatabaseRigComponent } from './database-rig/database-rig.component';
import { DatabaseLocationComponent } from './database-location/database-location.component';
import { DatabaseVendorComponent } from './database-vendor/database-vendor.component';
import { NoticeComponent } from './notice/notice.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'instruction',
                children: [
                    {
                        path: 'list',
                        component: InstructionListComponent
                    },
                    {
                        path: 'details',
                        component: InstructionDetailComponent
                    }
                ]
            },
            {
                path: 'database',
                children: [
                    {
                        path: 'rig',
                        component: DatabaseRigComponent
                    },
                    {
                        path: 'location',
                        component: DatabaseLocationComponent
                    },
                    {
                        path: 'vendor',
                        component: DatabaseVendorComponent
                    }
                ]
            },
            {
                path: 'notice',
                component: NoticeComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
]