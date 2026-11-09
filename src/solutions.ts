
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
