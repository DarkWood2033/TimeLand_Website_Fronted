import notify from "../plugins/notifications";

export default (name, type, message) => {
    notify.notify($t('notify.' + name + '.title'), message, 5, type);
}
