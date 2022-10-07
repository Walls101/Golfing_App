let courses;
function getAvailableCourses() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then((response) => response.json()).then(data => callMe(data))
} 

function callMe(data) {
    courses = data.courses;
    let courseOptionsHtml = '';
    courses.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
    });
    
    document.getElementById('course-select').innerHTML = courseOptionsHtml;
}
getAvailableCourses()

