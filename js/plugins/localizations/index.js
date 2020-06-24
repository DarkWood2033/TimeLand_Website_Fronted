import Localization from "@plugin/localization";

window.i18n = {
    page: {
        // Main
        home: 'Главная',
        about_us: 'О нас',
        contact: 'Тех.Поддержка',

        // Instruments
        instruments: 'Инструменты',
        timer: 'Обратный таймер',
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
            send: 'Отправить'
        }
    },
    copyright: 'Все права защищены. Копировать запрещено.'
};

export default Localization(window.i18n);
