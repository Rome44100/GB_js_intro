let game = {
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            // Получаем направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Game over!');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    // Этот метод выполняет при открытии страницы
    init() {
        console.log('Ваше положение на поле в виде буквы О');
        renderer.render();
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter.');
    }
}

game.init();