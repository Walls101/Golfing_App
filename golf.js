function getAvailableCourses() {
    return fetch('https://golf-courses-api.herokuapp.com/courses/').then(
      function (response) {
        return response.json();
      }
    );
}



// Not sure why this is here :/
//    const lists = {
//     1: {name: 'Shopping list'},
//     2: {name: 'Honey do list'},
//     ...
//    }