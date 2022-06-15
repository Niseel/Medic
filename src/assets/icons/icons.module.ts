import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { asAppointmentIcon } from './svg/appointment';
import { asBellIcon } from './svg/bell';
import { asCalendarIcon } from './svg/calendar';
import { asDashboardIcon } from './svg/dashboard';
import { asDepartmentIcon } from './svg/department';
import { asDoctorIcon } from './svg/doctor';
import { asDot3Icon } from './svg/dot3';
import { asDownArrowIcon } from './svg/downArrow';
import { asEarnIcon } from './svg/earn';
import { asEditIcon } from './svg/edit';
import { asMessageIcon } from './svg/message';
import { asPatient2Icon } from './svg/patient2';
import { asPatientIcon } from './svg/patient';
import { asPhoneIcon } from './svg/phone';
import { asPlusIcon } from './svg/plus';
import { asScissorIcon } from './svg/scissor';
import { asSearchIcon } from './svg/search';
import { asSettingIcon } from './svg/setting';
import { asTrashBinIcon } from './svg/trashBin';
import { asUserIcon } from './svg/user';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      sizes: {
        xs: '5px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '25px',
        xxl: '30px',
      },
      icons: [
        asDashboardIcon,
        asAppointmentIcon,
        asDepartmentIcon,
        asDoctorIcon,
        asMessageIcon,
        asPatientIcon,
        asPhoneIcon,
        asPlusIcon,
        asSettingIcon,
        asBellIcon,
        asDownArrowIcon,
        asSearchIcon,
        asEditIcon,
        asTrashBinIcon,
        asUserIcon,
        asCalendarIcon,
        asDot3Icon,
        asScissorIcon,
        asPatient2Icon,
        asEarnIcon,
      ],
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconsModule {}
