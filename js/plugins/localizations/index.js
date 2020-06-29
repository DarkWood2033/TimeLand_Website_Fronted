import Localization from "@plugin/localization";

window.i18n = {
    page: {
        // Main
        home: 'Главная',
        about_us: 'О нас',
        contact: 'Тех.Поддержка',

        // Instruments
        instruments: 'Инструменты',
        countdown_timer: 'Обратный таймер',
        stop_watch: 'Секундомер',
        circle_stop_watch: 'Круговой секундомер',
        interval_timer: 'Интервальный таймер',

        // Auth
        account: 'Аккаунт',
        registration: 'Регистрация',
        login: 'Авторизация'
    },
    errors: {
        500: {
            title: 'Произошла ошибка сервера!',
            message: 'Данный момент серввер не доступен. Пожалуйста, попробуйте повторить позже!'
        },
        404: {
            title: 'Ресурс не был найден!',
            message: 'По вашему запросу не удалось найти ресурс!'
        }
    },
    tags: {
        button: {
            cancel: 'Отменить',
            ok: 'Согласиться',
            send: 'Отправить',
            off: 'Выключить',

            start: 'Старт',
            stop: 'Стоп',
            fix: 'Зафиксировать',
            reset: 'Сбросить',
            next_circle: 'Следующий круг',
            edit: 'Редактировать',
            select_sound: 'Выбрать звук',
            set: 'Установить'
        }
    },
    text: {
        no_data: 'Данных нет',
        time: 'Время'
    },
    title: {
        no_indicate_time: 'Время не определено',
        edit_time: 'Редактирование времени',
        select_sound: 'Выбрать звук',
        time_expired: 'Время вышло'
    },
    message: {
        indicate_time: 'Пожалуйста, определите время таймер!',
        time_expired: 'Ваше указанное время истёк!'
    },
    copyright: 'Все права защищены. Копировать запрещено.'
};

export default Localization(window.i18n);
