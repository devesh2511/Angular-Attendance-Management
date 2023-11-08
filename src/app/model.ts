import { StudentService } from "./student/student.service"

export interface Student 
{
    id?:number,
    studentName: string,
    studentEmail: string,
    phoneNumber: string,
}

export interface Attendance{

    id:number,
    studentId:number
    date:Date,
    present:boolean
}

export interface chartData
{
    name:string,
    value:number
}


