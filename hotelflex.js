let hotelRooms = [[101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303]]
let roomTypes = ['Queen', 'King', 'Twin']
let queenRooms = [101, 102, 103, 104]
let kingRooms = [201, 202, 203, 204]
let twinRooms = [301, 302, 303]

// let dropDown = "<select>"

// for (let i = 0; i < hotelRooms.length; i++) {
//     for (let j = 0; j < hotelRooms[i].length; j++) {
//         dropDown = dropDown + `<option value='${hotelRooms[i][j]}'>${hotelRooms[i][j]}</option>`
//     }

// }
// dropDown = dropDown + "</select>"

// document.getElementById('dropDown').innerHTML = dropDown

let dropDown2 = "<select>"

for (let i = 0; i < queenRooms.length; i++) {

    dropDown2 = dropDown2 + `<option value='${queenRooms[i]}'>${queenRooms[i]}</option>`
}

dropDown2 = dropDown2 + "</select>"

document.getElementById('dropDown2').innerHTML = dropDown2

let dropDown3 = "<select>"

for (let i = 0; i < kingRooms.length; i++) {

    dropDown3 = dropDown3 + `<option value='${kingRooms[i]}'>${kingRooms[i]}</option>`
}

dropDown3 = dropDown3 + "</select>"

document.getElementById('dropDown3').innerHTML = dropDown3

let dropDown4 = "<select>"

for (let i = 0; i < twinRooms.length; i++) {

    dropDown4 = dropDown4 + `<option value='${twinRooms[i]}'>${twinRooms[i]}</option>`
}

dropDown4 = dropDown4 + "</select>"

document.getElementById('dropDown4').innerHTML = dropDown4