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
    "password": {
        "email": {
            "url": "api/auth/password/send",
            "method": "POST"
        },
        "reset": {
            "url": "api/auth/password/reset/{token}",
            "method": "GET"
        },
        "update": {
            "url": "api/auth/password/reset",
            "method": "POST"
        }
    },
    "user": {
        "timers": {
            "index": {
                "url": "api/user/timers",
                "method": "GET"
            },
            "store": {
                "url": "api/user/timers",
                "method": "POST"
            },
            "show": {
                "url": "api/user/timers/{timer}",
                "method": "GET"
            },
            "update": {
                "url": "api/user/timers/{timer}",
                "method": "PUT"
            },
            "destroy": {
                "url": "api/user/timers/{timer}",
                "method": "DELETE"
            }
        }
    },
    "support": {
        "store": {
            "url": "api/supports",
            "method": "POST"
        }
    },
    "localization": {
        "load": {
            "url": "localization/load",
            "method": "GET"
        }
    }
};