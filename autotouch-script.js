// --------------------------------------
// Information of recording
// Time: 2020-08-03 16:08:36
// Resolution: 1125, 2436
// Front most app: Crossword
// Orientation of front most app: Portrait
// --------------------------------------

const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at

appActivate("com.magmic.NYTCrosswords09");

const TOUCH_DELAY = 150000;

// Middle letter first
const letters = "ojmtnye".split('')

const keys = [
    [569.38, 1420.50],    
    [562.65, 1203.09],
    [724.93, 1277.18],
    [783.50, 1501.31],
    [572.27, 1625.39],
    [362.94, 1513.80],
    [377.35, 1289.66],
]
const ENTER_COORDS = [863.20, 1936.13]

function pressButton(coords) {
    touchDown(1, coords[0], coords[1]);
    usleep(TOUCH_DELAY);
    touchUp(1, coords[0], coords[1]);
    usleep(TOUCH_DELAY);
}

function enterWord(string) {
    for (var i = 0; i < string.length; i++) {
        const char = string.substr(i, 1);

        var keyIndex = null;
        for (var x = 0; x < letters.length; x++) {
            if (letters[x] == char) {
                keyIndex = x;
                break;
            }
        }
        if (keyIndex == null) { throw new Error("No letter key found!")}
        var coords = keys[keyIndex];
        console.log(i, char, coords);
        if (!coords) { throw new Error("no coords found!")}

        pressButton(coords);
    }

    pressButton(ENTER_COORDS);
}

// Enter the words array here
const words = []
words.forEach(word => enterWord(word))
