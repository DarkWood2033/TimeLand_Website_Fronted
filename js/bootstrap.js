import Vue from 'vue';

import './configs/globalComponent';
import './configs/globalFilter';

import httpRequest from "@/plugins/httpRequest/install";
Vue.use(httpRequest);
import localization from "@/plugins/localizations/install"
Vue.use(localization);
import dialog from "@/plugins/dialogs/install";
Vue.use(dialog);
import notification from "@/plugins/notifications/install";
Vue.use(notification);
import validation from "@/plugins/validations/install";
Vue.use(validation);
import utils from "@/utils";
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

export default Vue;
