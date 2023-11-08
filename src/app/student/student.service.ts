import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance, Student } from '../model';

@Injectable({
  providedIn: 'root'
})


export class StudentService {
  static studentData(studentData: any) {
    throw new Error('Method not implemented.');
  }


  studentData: Array<Student> = []
  attendance: Array<Attendance> = []
  studentAttendance: Array<Student> = []

  constructor(private http: HttpClient) { }


  saveStudent(stud: Student) {
    return this.http.post(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/stud`, stud)
  }

  getAllStudents() {
    return this.http.get<Array<Student>>(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/stud`)
  }

  getStudentByID(id: any) {
    return this.http.get<Student>(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/stud/${id}`)
  }

  updateStudentById(studentId: number, studentdata: Student) {
    return this.http.put(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/stud/${studentId}`, studentdata)
  }

  deleteStudentById(id: number) {
    return this.http.delete(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/stud/${id}`)
  }

  addAttendance(attendance: Attendance, present: boolean) {
    attendance.present = present;
    return this.http.post(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/attend`, attendance)
  }
  searchAttendance() {
    return this.http.get<Array<Attendance>>(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/attend`)
  }

  getAttendanceByID(id: any) {
    return this.http.get<Student>(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/attend/${id}`)
  }

  deleteAttendanceById(id: number) {
    return this.http.delete(`https://65389d76a543859d1bb1a48a.mockapi.io/stud/attend/${id}`)
  }


}
