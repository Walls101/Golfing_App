async function getAvailableCourses() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then((response) => response.json()).then(data => data.courses)
} 

async function rendorAvailableCourses() {
    const courses = await getAvailableCourses();
    courseName(courses);
}

async function initialLoad() {
    await rendorAvailableCourses();
}


function courseName(courses) {
    let courseOptionsHtml = '';
    courses.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
    });
    
    document.getElementById('course-select').innerHTML = courseOptionsHtml;
}

getAvailableCourses()

function getCourseData(){
    return fetch('https://golf-courses-api.herokuapp.com/courses/'+ info)
    .then((response) => response.json()).then(data => courseData(data))
}

function courseData(data) {
    let teeBoxes = data;
    let teeBoxSelectHtml = '';
    teeBoxes.forEach(function (teeBox, index) {
    teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
     teeBox.totalYards
    } yards</option>`
    });

    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}

initialLoad();

//confused with step 4 and making the teebox show in the select box.