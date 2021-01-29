/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x - position on X-coordinate
 * @property {int} y - position on Y-coordinate
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Двигает игрока по переданному направлению
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
}