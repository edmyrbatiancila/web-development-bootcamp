/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function moveTwoTimesWithBeeper() {
    move();
    move();
    putBeeper();
}

function moveTurnRightWithBeeper() {
    move();
    turnRight();
    move();
    putBeeper();
}

function moveUpWithBeeper() {
    putBeeper();
    turnLeft();
    moveTwoTimesWithBeeper();
    turnRight();
}

function diagonalDownWithBeeper() {
    moveTurnRightWithBeeper();
    turnLeft();
    moveTurnRightWithBeeper();
    turnLeft();
}

function repeatedDiagonalWithBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    putBeeper();   
}

function diagonalUpWithBeeper() {
    moveTwoTimesWithBeeper();
    turnLeft();
    repeat(2) {
        repeatedDiagonalWithBeeper();
    }
    turnRight();
}

function diagonalDownWithBeeper2() {
    moveTwoTimesWithBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    putBeeper();
    turnLeft();
    turnLeft();
}

function goTopWithBeeper() {
    moveTwoTimesWithBeeper();
    turnRight();
}

function main(){
   //your code here
    moveUpWithBeeper();
    diagonalDownWithBeeper();
    diagonalUpWithBeeper();
    diagonalDownWithBeeper2();
    goTopWithBeeper();
}
