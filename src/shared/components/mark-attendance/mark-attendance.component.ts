import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../../app/student/student.service';
import { Attendance, Student } from '../../../app/model';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  attendance: Array<Student> = []
  studentForm: FormGroup

  constructor(private service: StudentService, private router: Router) {
    this.studentForm = new FormGroup({
      'studentId': new FormControl('', Validators.required),
      'date': new FormControl('', [Validators.required]),
      'present': new FormControl<boolean | undefined>(false, [Validators.required]),

    })

  }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((data) => {
      this.attendance = data
      this.service.studentAttendance = this.attendance
    })
  }
  submitAttendance() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      const present = this.studentForm.controls['present'].value === "true";
      this.service.addAttendance(this.studentForm.value, present).subscribe({
        next: () => { this.router.navigate(['/charts']); }
      })
    }
    else {
      alert("Invalid form");
    }

  }
}