export default {
    "auth": {
        "logout": {
            "url": "api/auth/logout",
            "method": "GET"
        },
        "refresh": {
            "url": "api/auth/refresh",
            "method": "GET"
        },
        "login": {
            "url": "api/auth/login",
            "method": "POST"
        },
        "registration": {
            "url": "api/auth/registration",
            "method": "POST"
        }
    },
    "email": {
        "resend": {
            "url": "api/auth/email/resend",
            "method": "GET"
        },
        "verify": {
            "url": "api/auth/verify",
            "method": "POST"
        },
        "show": {
            "url": "api/auth/verify",
            "method": "GET"
        }
    },
    "localization": {
        "load": {
            "url": "localization/load",
            "method": "GET"
        }
    }
};