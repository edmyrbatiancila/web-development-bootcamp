/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function goStraightSlantingWithBeeper() {
    repeat(4) {
        putBeeper();
        turnLeft();
        move();
        turnRight();
        move();
    }
}

function main(){
   //your code here
    goStraightSlantingWithBeeper();
    putBeeper();
}
