class Person {
    name: string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
 rollNumber: number;
 courses:any[] = [];
 constructor(name: string, age:number, rollNumber: number){
    super(name, age);
     this.rollNumber = rollNumber;
 }
 registerForCourses(course:any){
    this.courses.push(course);
 }
}

class Instructor extends Person{
    salary: number;
    courses: any[] = [];
    constructor(name:string, age:number,salary: number){
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course:any){
       this.courses.push(course);
    }
   }

   class Courses{
    id:number;
    name:string;
    students:Student[] = [];
    Instructor:Instructor[] =[];
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    addStudent(std:Student){
        this.students.push(std);
    }
    setInstructor(instructor: Instructor){
        this.Instructor.push(instructor)
    }
   }

   class Department{
    name:Student;
    courses:Courses[];
    addCourse(course:Courses){
        this.courses.push(course)
    }
   }
   const student = new Student("Wariha", 12, 1230);
   const d1 = new Courses(12, "Computer Science");

   console.log(student);
   console.log(d1);