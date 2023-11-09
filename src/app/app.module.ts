import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AddStudentComponent } from '../shared/components/add-student/add-student.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { EditStudentComponent } from '../shared/components/edit-student/edit-student.component';
import { MarkAttendanceComponent } from '../shared/components/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from '../shared/components/view-attendance/view-attendance.component';
import { ChartsComponent } from '../shared/components/charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    SidebarComponent,
    AddStudentComponent,
    DashboardComponent,
    EditStudentComponent,
    MarkAttendanceComponent,
    ViewAttendanceComponent,
    ChartsComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
