import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CurrencyEarning } from './pipes/currency-earning.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '../../assets/icons/icons.module';
import { InnerMsgDirective } from '../shared/directives/inner-msg.directive';
import { NgModule } from '@angular/core';
import { ShowErrorDirective } from '../shared/directives/show-error.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const declarations: any[] = [
  HeaderComponent,
  SidebarComponent,
  // ShowErrorDirective,
  InnerMsgDirective,
  CurrencyEarning,
];

const imports = [
  IconsModule,
  BrowserModule,
  DropdownModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class ShareModuleModule {}
