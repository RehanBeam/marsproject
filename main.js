var canvas = document.getElementById("myCanvas")
var canvas2d = canvas.getContext("2d")
var background = "mars.jpg"
var rover = "rover.png"
var rover_width = 90
var rover_height = 90
var rover_location_x = 10
var rover_location_y = 10


function add() {

    b_image = new Image() ;
    b_image.onload = uploadb ;
    b_image.src = background ;
    
    r_image = new Image() ;
    r_image.onload = uploadr ;
    r_image.src = rover ;

}

function uploadb() {

    canvas2d.drawImage(b_image, 0,0, canvas.width, canvas.height) ;

}

function uploadr() {

    canvas2d.drawImage(r_image, rover_location_x, rover_location_y, rover_width, rover_height) ;

}

window.addEventListener("keydown", moveRover) ;

function moveRover(e) {

    keypressed = e.keyCode ;
    

    if(keypressed == 38) {

        roverUp()
        console.log("up")

    }

    if(keypressed == 40) {

        roverDown()
        console.log("down")

    }

    if(keypressed == 37) {

        roverLeft()
        console.log("left")

    }

    if(keypressed == 39) {

        roverRight()
        console.log("right")

    }

}

function roverUp() {

    if(rover_location_y>=0) {
        rover_location_y = rover_location_y -5 ;
        uploadb() ;
        uploadr() ;
    }

}

function roverDown() {

    if(rover_location_y<=500) {
        rover_location_y = rover_location_y + 5 ;
        uploadb() ;
        uploadr() ;
    }

}

function roverLeft() {

    if(rover_location_x>=0) {
        rover_location_x = rover_location_x -5 ;
        uploadb() ;
        uploadr() ;
    }

}

function roverRight() {

    if(rover_location_x<=800) {
        rover_location_x = rover_location_x + 5 ;
        uploadb() ;
        uploadr() ;
    }

}