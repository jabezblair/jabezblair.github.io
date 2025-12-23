let students = JSON.parse(localStorage.getItem("students")) || [];
const tbody = document.getElementById("tableBody");

function render(){
 tbody.innerHTML="";
 students.forEach((s,i)=>{
  tbody.innerHTML+=`<tr>
  <td>${s.roll}</td><td>${s.name}</td><td>${s.course}</td>
  <td>${s.marks}</td><td>${s.grade}</td>
  <td>
   <button onclick="edit(${i})">Edit</button>
   <button onclick="del(${i})">Delete</button>
  </td></tr>`;
 });
 localStorage.setItem("students",JSON.stringify(students));
}
document.getElementById("studentForm").onsubmit=e=>{
 e.preventDefault();
 let s={roll:roll.value,name:name.value,course:course.value,marks:marks.value,grade:grade.value};
 let i=students.findIndex(x=>x.roll==s.roll);
 if(i>=0)students[i]=s; else students.push(s);
 e.target.reset(); render();
}
function edit(i){
 let s=students[i];
 roll.value=s.roll; name.value=s.name; course.value=s.course;
 marks.value=s.marks; grade.value=s.grade;
}
function del(i){students.splice(i,1);render();}
render();