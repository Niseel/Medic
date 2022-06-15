import { BrowserModule } from '@angular/platform-browser';
import { DashboardChartSurveyComponent } from './dashboard-chart-survey/dashboard-chart-survey.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ShareModuleModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, DashboardChartSurveyComponent],
  imports: [BrowserModule, ShareModuleModule],
  exports: [DashboardComponent, DashboardChartSurveyComponent],
})
export class DashboardModuleModule {}
