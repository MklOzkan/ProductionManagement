export const config = {
    api: {
        baseUrl: 'http://localhost:8080'
    },
    userRightsOnRoutes: [
        {
            urlRegex: /\/dashboard\/talasli-imalat-amiri$/,
            roles: ['TalasliImalatAmiri']
        },
        {
            urlRegex: /\/dashboard\/polisaj-amiri$/,
            roles: ['PolisajAmiri']
        },
        {
            urlRegex: /\/dashboard\/lift-montaj-amiri$/,
            roles: ['LiftMontajAmiri']
        },
        {
            urlRegex: /\/dashboard\/bloklift-montaj-amiri$/,
            roles: ['BlMontajAmiri']
        },
        {
            urlRegex: /\/dashboard\/boyama-ve-paketleme-amiri$/,
            roles: ['BoyamaPaketlemeAmiri']
        },
        {
            urlRegex: /\/dashboard\/kalite-kontrol-amiri$/,
            roles: ['KaliteKontrol']
        },
        {
            urlRegex: /\/dashboard\/uretim-planlama$/,
            roles: ['UretimPlanlama']
        },
        {
            urlRegex: /\/dashboard\/yonetici-menu$/,
            roles: ['Yonetici']
        },
        {
            urlRegex: /\/dashboard\/password-update$/,
            roles: ['Yonetici']
        },
        {
            urlRegex: /\/dashboard\/get-orders$/,
            roles: ['Yonetici']
        },
        {
            urlRegex: /\/dashboard\/yonetici-menu\/update-password$/,
            roles: ['Yonetici']
        },
        {
            urlRegex: /\/dashboard\/uretim-planlama\/[0-9]+$/,
            roles: ['UretimPlanlama']
        },
        {
            urlRegex: /\/dashboard\/uretim\/[0-9]+$/,
            roles: ['UretimPlanlama']
        },
        {
            urlRegex: /\/dashboard\/uretim$/,
            roles: ['UretimPlanlama']
        },
        {
            urlRegex: /\/dashboard\/uretim\/new$/,
            roles: ['UretimPlanlama']
        }
    ]
};