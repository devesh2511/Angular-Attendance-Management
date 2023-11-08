import { Component, OnInit, ViewChild } from '@angular/core';
import { Attendance, Student } from '../../../app/model';
import { StudentService } from "../../../app/student/student.service";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  studentList: Array<Student> = [];
  displayList: Array<Student> = [];
  studentAttendance: Array<Attendance> = []
  dates: Array<Date> = []
  paginator: MatPaginator | undefined;
  pageEvent: PageEvent = {
    length: 5,
    pageIndex: 0,
    pageSize: 3,
    previousPageIndex: 0
  }
  filteredArray: Array<Student> = [];


  pageLength = this.studentList.length;
  searchForm: FormGroup = new FormGroup({});
  
  constructor(private studentService: StudentService, private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      "title": this.fb.control('')
    })
    this.changeData();
    this.pageEvent.length = this.studentList.length;
    this.pageEvent.pageSize = this.pageSizes[0]
    this.findElementsByName();
    
    this.searchForm.valueChanges.subscribe(e => {
      this.filteredArray = this.applyFilter(e.title);
      this.displayList=[...this.filteredArray];
      console.log("Display List here: ",this.displayList);
      
      this.handlePagination();
    })
  }
  
  changeData() {
    this.studentService.getAllStudents().subscribe((data) => {
      this.studentList = data;
      this.filteredArray = this.studentList;
      this.displayList=[...this.filteredArray];
      this.handlePagination();
    })
  }

  deleteStudent(id: any) {

    this.studentService.searchAttendance().subscribe((data) => {
      this.studentAttendance = data
      console.log(this.studentAttendance.length)
    }
    )


    this.studentService.deleteStudentById(id).subscribe((data) => {
      this.changeData()
    })


  }


  pageSizes = [5, 10, 25, 100];

  ngAfterViewInit() {

  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.handlePagination();
  }

  handlePagination() {
    let startingIndex = this.pageEvent.pageIndex * this.pageEvent.pageSize;
    let endingIndex = startingIndex + this.pageEvent.pageSize;
    this.displayList = this.filteredArray.slice(startingIndex, endingIndex);
    this.pageLength = this.filteredArray.length;
  }

  applyFilter(query: string): Student[] {
    console.log('name filter: ', this.studentList);
    return this.studentList.filter((studentData) => {
      return studentData.studentName.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || 
      studentData.studentEmail.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      studentData.phoneNumber.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    });
  }

  clear(el: any) {
    console.log("clear")
    el.value.text = "";
    this.studentList = this.studentService.studentData;
  }

  findElementsByName() {
  }

}



