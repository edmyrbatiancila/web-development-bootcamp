/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function goStraightSlanting() {
    repeat(4) {
        turnLeft();
        move();
        turnRight();
        move();
    }
}

function main(){
   //your code here
    goStraightSlanting();
}
