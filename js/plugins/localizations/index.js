import Localization from "@plugin/localization";

window.i18n = {
    errors: {
        500: {
            title: 'Произошла ошибка сервера!',
            message: 'Данный момент серввер не доступен. Пожалуйста, попробуйте повторить позже!'
        },
        404: {
            title: 'Ресурс не был найден!',
            message: 'По вашему запросу не удалось найти ресурс!'
        }
    }
};

export default Localization(window.i18n);
