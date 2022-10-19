let id = 0;

function getAvailableCourses(cb) {
    fetch('https://golf-courses-api.herokuapp.com/courses')
    .then((response) => response.json())
    .then(data => cb(data.courses))
    // const response = await fetch('https://golf-courses-api.herokuapp.com/courses');
    // const data = await response.json();
    // cb(data.courses);
} 

function rendorAvailableCourses(courses) {
    // const courses = await getAvailableCourses();
    courseName(courses);
    // getCourseData(courses);
}

function courseName(courses) {
    console.log("courseName")
    let courseOptionsHtml = '';
    courses.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`
    });
    
    document.getElementById('course-select').innerHTML = courseOptionsHtml;

    var select = document.getElementById('course-select');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    getCourseData(value, rendorCourse);
    // rendorCourse(getCourseData(value));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCourseData(course, cb){
    console.log("getCourseData")
    fetch(`https://golf-courses-api.herokuapp.com/courses/${course}`)
    .then((response) => response.json())
    .then(data => cb(data.data.holes))
    // const data = await response.json();
    // console.log(data);
    // return data.holes;
}

function rendorCourse(courseName){
    console.log(courseName)
    console.log("renderCourse")
    const teeBoxes = courseName;
    console.log(teeBoxes);
    //teeBoxes is undefined ***
    courseData(teeBoxes);
}

function courseData(data) {
    console.log("CourseData")
//Problem is here. Still trying to enter the data here into the dropbox.**
    // having issues with map aa cannot read properties of undefied(reading'holes')
    let info = data.map(holeItem => holeItem.teeBoxes[0]);
    let teeBoxSelectHtml = '';
    info.forEach((teeBox, index) => {
        teeBoxSelectHtml += `<option value="${index}">PRO, ${teeBox.yards} yards</option>`
        teeBoxSelectHtml += `<option value="${index}">CHAMPION, ${teeBox.yards} yards</option>`
        teeBoxSelectHtml += `<option value="${index}">MEN, ${teeBox.yards} yards</option>`
        teeBoxSelectHtml += `<option value="${index}">WOMEN, ${teeBox.yards} yards</option>`

    });

    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}


function initialLoad() {
    // await rendorAvailableCourses();
    getAvailableCourses(rendorAvailableCourses)
    // await rendorCourse();
}

initialLoad();
//confused with step 4 and making the teebox show in the select box.
//But I got the data course data