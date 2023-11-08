///////////////////////
////  My solution  ////
///////////////////////

const student = [{id:1, name:'john lee'}, {id:3, name:'Adam smith'}, {id:2, name:'ddol xd'}]

const studentID = student.map(
        (sid) => {
                return sid.id
        }
)
const studentSort = studentID.sort()
console.log(studentSort) //asc
console.log(studentSort.reverse()) //dsc

const studentName = student.map (
        (sname) => {
                return sname.name
        }
)
const studentNameSort = studentName.sort()
console.log(studentNameSort)
console.log(studentNameSort.reverse())