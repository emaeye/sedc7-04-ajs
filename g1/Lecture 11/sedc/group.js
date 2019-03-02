const Group = function (name, students = []) {
    this.name = name;
    this.students = students;
    this.president = null;
    this.classroom = null;
    this.subjects = [];
    this.assistant = null;
    this.currentSubject = null;
}

Group.prototype.addStudent = function (student) {
    const existing = this.students.find(s => s.id === student.id);
    if (existing) {
        throw Error (`Student with id ${student.id} already exists`);
    }
    this.students.push(student);
}

Group.prototype.getAllStudents = function () {
    return this.students.slice().sort((f, s)=> f.id - s.id);
}

Group.prototype.addSubject = function (subject) {
    this.subjects.push(subject);
}

Group.prototype.getAllSubjects = function () {
    return this.subjects.slice();
}

const Subject = function (name, group) {
    this.name = name;
    this.group = group;
    this.lecturer = null;
}

Subject.prototype.getSubjectInfo = function () {
    return `${this.name} by ${this.lecturer.getFullName()}`
}