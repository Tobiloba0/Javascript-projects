
let student = {
    name: "John",
    age: 16,
    grade: "B"
};
student.school = "Greenwood High";
student.grade = "A";
delete student.age;

console.log(Object.keys(student));
console.log(Object.values(student));


