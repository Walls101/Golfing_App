let courses;
function getAvailableCourses() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then((response) => response.json()).then(data => data).then(data => callMe(data))
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


// Not sure why this is here :/
//    const lists = {
//     1: {name: 'Shopping list'},
//     2: {name: 'Honey do list'},
//     ...
//    }