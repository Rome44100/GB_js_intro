let mover = {
    /**
     * Проверяет будет ли входить введенное значение в допустимый диапазон
     * @param {int} direction Направление движения
     */
    checkPosition(direction) {
        const prepos = this.getNextPosition(direction);
        if (prepos.x >= 0 && prepos.x < config.rowsCount &&
            prepos.y >= 0 && prepos.y < config.colsCount) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * Получает и отдает нпарвление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число 1(˅<), 2(˅), 3(˅>), 4(<), 6(>), 7(^<), 8(^), 9(^>) куда вы хотите переместитья. Отмена для выхода!'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел: ' + availableDirections);
                continue;
            }
            if (false === this.checkPosition(direction)) {
                alert("Стенка! Введите другое значение!" + availableDirections);
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения
     * @param {int} direction Направление движения игрока
     * @returns {{x: int, y: int}} Следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }
}