async function getAvailableCourses() {
    // return fetch('https://golf-courses-api.herokuapp.com/courses')
    // .then((response) => response.json()).then(data => data.courses)
    const response = await fetch('https://golf-courses-api.herokuapp.com/courses');
    const data = await response.json();
    return data.courses;
} 

async function rendorAvailableCourses() {
    const courses = await getAvailableCourses();
    courseName(courses);
    // getCourseData(courses);
}

function courseName(courses) {
    let courseOptionsHtml = '';
    courses.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`
    });
    
    document.getElementById('course-select').innerHTML = courseOptionsHtml;

    var select = document.getElementById('course-select');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    getCourseData(value);
    // let courseID = course.id;
    // getCourseData(courseID);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getCourseData(course){
    const response = await fetch(`https://golf-courses-api.herokuapp.com/courses/${course}`);
    const data = await response.json();
    console.log(data);
    return courseData(data);
}


function courseData(data) {
//Problem is here. Still trying to enter the data here into the dropbox.**
    
    let teeBoxes = data;
    let teeBoxSelectHtml = '';
    teeBoxes.forEach(function (teeBox, index) {
    teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${teeBox.totalYards} yards</option>`
    });

    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}


async function initialLoad() {
    await rendorAvailableCourses();
}

initialLoad();

//confused with step 4 and making the teebox show in the select box.
//But I got the data course data