
function multiplyValue(value: number, multiplier?: number): number {
    let answer: number
    if (typeof(multiplier) !== 'undefined'){
        answer = value*multiplier

    } else {
        answer = value*2
    }
    console.log(answer)
    return answer


}

multiplyValue(5,0);

function processInput( value: string | number | boolean): number | string {
    let answer: number | string
    if (typeof(value) === 'string') {
        answer = value.trim().toLowerCase()
     } else if (typeof(value) === 'number'){
        answer = value*10

     } else {
        if (value) {
            answer = 'Active'

        } else {
            answer = 'Inactive'
        }
     }
     console.log(answer)
     return answer
}

processInput(10)

function formatCoordinate( value : readonly [number,number,string]) : string {
    let formattedAnswer : string = `Location: ${value[2]} (${value[0]}, ${value[1]})`
    console.log(formattedAnswer)
    return formattedAnswer

}
formatCoordinate([10.222,10.111,'ctg'])

function concatenateArrays<T>(...arrays: T[][]): T[]{
    let combinedArray: T[] = []
    for (let elements of arrays){
        combinedArray = [...combinedArray,...elements]
    }
    console.log(combinedArray)
    return combinedArray
}

concatenateArrays(['h','e'],['l','p'],['m','e'])

interface Course {
    title:string,
    students:number,
    isPublished:boolean
}

 function getPopularCourses(courses: Course[], minStudents:number):Course[] {
    let filteredCourses: Course[] = []
    for (let course of  courses){
        if (course.isPublished && course.students >= minStudents){
            filteredCourses.push(course)
        }
    }
    console.log(filteredCourses)
    return filteredCourses
 }
 const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

getPopularCourses(courses, 80);


function pluckValues<T, K extends keyof T>(items: T[],key: K):T[K][]{
    const plucked: T[K][] = [];
    for (let value of items){
        plucked.push(value[key])
    }
    console.log(plucked)
    return plucked
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name");
pluckValues(users, "role");


class Employee {
    protected name:string
    private baseSalary: number
    
    constructor(name:string,
        baseSalary:number
    ) {
        this.name = name;
        this.baseSalary = baseSalary
    }
    public getDetails():string{
        console.log(`Employee: ${this.name}, Base Salary: ${this.baseSalary}`)
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}` 
    }
}

class Manager extends Employee{
   private department:string;
   
   constructor(
    name:string,
    baseSalary:number,
    department:string
   ){
    super(name,baseSalary);
    this.department = department
   }

   public getRoleInfo(){
    console.log(`Manager of ${this.department}: ${this.name}`)
    return `Manager of ${this.department}: ${this.name}`
   }

   
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

// Sample Output:
"Employee: Alice, Base Salary: 50000"
"Manager of Engineering: Alice"