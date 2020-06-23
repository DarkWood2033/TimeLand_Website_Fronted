import httpRequest from '@plugin/httpRequest'
import routesApi from "../../configs/routesApi";

// Drivers
import DefaultDriver from "./drivers/default/DefaultDriver"

export default httpRequest({
    routes: routesApi,
    config: {
        // Дравейра, которые будут отправлять запросы
        drivers: {
            default: DefaultDriver,
        },

        tokens: {
            auth: 'token',
            cs_rf: 'X-CSRF-TOKEN'
        },
    }
});
