// let id = 0;

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
    // console.log("courseName")
    let courseOptionsHtml = '';
    courses.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`
    });
    
    document.getElementById('course-select').innerHTML = courseOptionsHtml;

    var select = document.getElementById('course-select');
    var value = select.options[select.selectedIndex].value;
    // console.log(value);
    getCourseData(value, rendorCourse);
    // rendorCourse(getCourseData(value));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

//This is the 

function getCourseData(course, cb){
    // console.log("course", course)
    fetch(`https://golf-courses-api.herokuapp.com/courses/${course}`)
    .then((response) => response.json())
    .then(data => cb(data.data.holes))
    // const data = await response.json();
    // console.log(data);
    // return data.holes;
}

function rendorCourse(courseName){
    // console.log(courseName)
    // console.log("renderCourse")
    const teeBoxes = courseName;
    // console.log(teeBoxes);
    //teeBoxes is undefined ***
    courseData(teeBoxes);
}

function courseData(data) {
    // console.log("CourseData")
//Problem is here. Still trying to enter the data here into the dropbox.**
    // having issues with map aa cannot read properties of undefied(reading'holes')
    let holeRow = document.getElementById("hole-row");
    let yardRow = document.getElementById("yardage-row");
    let parRow = document.getElementById("par-row");
    let handicapRow = document.getElementById("handicap-row");
    // console.log(typeof(data));
    let info = data.map(holeItem => holeItem.teeBoxes[0]);
    let teeBoxSelectHtml = '';
    holeRow.innerHTML = '';
    yardRow.innerHTML = '';
    parRow.innerHTML = '';
    handicapRow.innerHTML = '';
    holeRow.innerHTML += `<th id=hole>Hole</th>`;
    yardRow.innerHTML += `<th id=yardage>Yardage</th>`;
    parRow.innerHTML += `<th id=par>Par</th>`;
    handicapRow.innerHTML += `<th id=handicap>Handicap</th>`;
    info.forEach((teeBox, index) => {
        teeBoxSelectHtml += `<option value="${index}">PRO, ${teeBox.yards} yards</option>`
        teeBoxSelectHtml += `<option value="${index}">CHAMPION, ${teeBox.yards} yards</option>`
        teeBoxSelectHtml += `<option value="${index}">MEN, ${teeBox.yards} yards</option>`
        teeBoxSelectHtml += `<option value="${index}">WOMEN, ${teeBox.yards} yards</option>`

        holeRow.innerHTML += `<td>${index + 1 }</td>`;
        yardRow.innerHTML += `<td>${teeBox.yards}</td>`;
        parRow.innerHTML += `<td>${teeBox.par}</td>`;
        handicapRow.innerHTML += `<td>${teeBox.hcp}</td>`;


    });

    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}

class Player {
    constructor(name, id = getNextId(), scores = []) {
      this.name = name;
      this.id = id;
      this.scores = scores;
    }
}

function addList() {
    let name = document.getElementById("new-list-name-input");
    let table = document.getElementById('table');
    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');
    let score3 = document.getElementById('score3');
    let score4 = document.getElementById('score4');
    let score5 = document.getElementById('score5');
    let score6 = document.getElementById('score6');
    let score7 = document.getElementById('score7');
    let score8 = document.getElementById('score8');
    let score9 = document.getElementById('score9');
    let score10 = document.getElementById('score10');
    let score11 = document.getElementById('score11');
    let score12 = document.getElementById('score12');
    let score13 = document.getElementById('score13');
    let score14 = document.getElementById('score14');
    let score15 = document.getElementById('score15');
    let score16 = document.getElementById('score16');
    let score17 = document.getElementById('score17');
    let score18 = document.getElementById('score18');
    
///Make a string for the scores
    let player = new Player(name.value, 1,
         [
            score1.value,
            score2.value,
            score3.value,
            score4.value,
            score5.value,
            score6.value,
            score7.value,
            score8.value,
            score9.value,
            score10.value,
            score11.value,
            score12.value,
            score13.value,
            score14.value,
            score15.value,
            score16.value,
            score17.value,
            score18.value
        ]);
    console.log(player);
    table.innerHTML += `<tr>
                            <th>${player.name}</th>
                            <td>${player.scores[0]}</td>
                            <td>${player.scores[1]}</td>
                            <td>${player.scores[2]}</td>
                            <td>${player.scores[3]}</td>
                            <td>${player.scores[4]}</td>
                            <td>${player.scores[5]}</td>
                            <td>${player.scores[6]}</td>
                            <td>${player.scores[7]}</td>
                            <td>${player.scores[8]}</td>
                            <td>${player.scores[9]}</td>
                            <td>${player.scores[10]}</td>
                            <td>${player.scores[11]}</td>
                            <td>${player.scores[12]}</td>
                            <td>${player.scores[13]}</td>
                            <td>${player.scores[14]}</td>
                            <td>${player.scores[15]}</td>
                            <td>${player.scores[16]}</td>
                            <td>${player.scores[17]}</td>

                        </tr>`;
}


// function total() {
//     // for (var r = 0; ) {

//     // }
// }

function initialLoad() {
    // await rendorAvailableCourses();
    getAvailableCourses(rendorAvailableCourses)
    // await rendorCourse();
}

initialLoad();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//This is the table code.////////////////////////////////////////////////////
function changeTable(golfId) {
    getCourseData(golfId, rendorCourse)
    // let newCourse = document.querySelector("#course-select");
    // let data = newCourse.value
    // getCourseData(data)
}