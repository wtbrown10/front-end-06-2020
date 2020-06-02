let hotelRooms = [[101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303]]
let roomTypes = ['Queen', 'King', 'Twin']

let dropDown = "<select>"

for (let i = 0; i < hotelRooms.length; i++) {
    for (let j = 0; j < hotelRooms[i].length; j++) {
        dropDown = dropDown + `<option value='${hotelRooms[i][j]}'>${hotelRooms[i][j]}</option>`
    }

}
dropDown = dropDown + "</select>"

document.getElementById('dropDown').innerHTML = dropDown