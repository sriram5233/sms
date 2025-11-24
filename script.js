
// Students
const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
if(studentForm){
    studentForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        if(name){
            const li = document.createElement('li');
            li.textContent = name;
            studentList.appendChild(li);
            studentForm.reset();
        }
    });
}

// Teachers
const teacherForm = document.getElementById('teacherForm');
const teacherList = document.getElementById('teacherList');
if(teacherForm){
    teacherForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('teacherName').value;
        if(name){
            const li = document.createElement('li');
            li.textContent = name;
            teacherList.appendChild(li);
            teacherForm.reset();
        }
    });
}

// Classes
const classForm = document.getElementById('classForm');
const classList = document.getElementById('classList');
if(classForm){
    classForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('className').value;
        if(name){
            const li = document.createElement('li');
            li.textContent = name;
            classList.appendChild(li);
            classForm.reset();
        }
    });
}
