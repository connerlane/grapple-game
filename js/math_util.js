/**
 * Math utility class
 */
class MathUtil {

    static calculateTheta(opposite, adjacent) {
        return Math.atan2(opposite, adjacent);
    }

    static distanceBetween(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static choose(array) {
        return array[Math.floor(Math.random()*array.length)];
    }

}