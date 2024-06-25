const course = {
    courseName : "web and Development",
    Price : 500,
    courseInstractor : "Jaffar"
}


console.log(course.courseInstractor);
const {courseInstractor : Teacher} = course;
// console.log(courseInstractor);
console.log(Teacher);
// console.log(course);

// Objects De-structure 
// Object ki Koi value access krne ke lye usko de-Structer bh kar sakte hain
// new variable assign kr ke bracket main {} key add kro and objects kon iske equal krdo
// key name bh change kr sakte ho


//  {
//     "id" : 212561;
//     "name" : "sherry"
//     "email" : "sherrykhan243"
//  }

[
    {},
    {},
    {}
]



 // Objects without variable JSON hota hai But isme Key value bh string hOna Chaia 
 // Array ke format  main bh milti hai 




/* ************************** Summary ******************************
01) Objects De-Structure easily access objects values
02) declare variable with braces{} under braces object key name and assign object name =>
    const {coursInstructer} = course
  console.log(coursInstructer)
03)  key Name can easily with time of de-structuring => const {coursInstructer :Teacher}=course
   console.log(Tecaher)
04) Without Variable assign Objects is known as JSON
05) JSON Can declare Object and Array Format
*/ 

