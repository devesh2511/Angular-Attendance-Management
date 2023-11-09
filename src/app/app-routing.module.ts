import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from '../shared/components/add-student/add-student.component';
import { ChartsComponent } from '../shared/components/charts/charts.component';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { EditStudentComponent } from '../shared/components/edit-student/edit-student.component';
import { MarkAttendanceComponent } from '../shared/components/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from '../shared/components/view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path:'addstudent',
    component:AddStudentComponent
  },
  // {
  //   path:'navbar',
  //   component:NavbarComponent
  // },
  {
    path:'',
    component:DashboardComponent
  },
  // {
  //   path:'',
  //   component:DashboardComponent
  // },
  {
    path:'edit-student/:id',
    component:EditStudentComponent
  },
  {
    path:'markAttendance',
    component:MarkAttendanceComponent
  },
  {
    path:'viewAttendance/:id',
    component:ViewAttendanceComponent
  },
  {
    path:'charts',
    component:ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
