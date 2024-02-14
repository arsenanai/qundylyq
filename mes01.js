const mes = {
    data() {
        return {
            // Translation variables
            locale    : 'kk', // by default language is set here
            locales   : [ {code: 'kk', name: 'Қаз'}, {code: 'ru', name: 'Рус'} ],
            messages  : {
                certificates_check: {
                    kk: 'Сертификаттарды тексеру',
                    ru: 'Проверка сертификатов'
                },
                contact_text: {
                    kk: 'Сізге де осындай тексеру парақшасы керек пе?',
                    ru: 'Вам тоже нужна такая страница проверки?'
                },
                check_label: {
                    kk: 'Тексеру',
                    ru: 'Проверка'
                },
                validation_rules: {
                    kk: 'Сертификат нөмірі бос болмауы керек',
                    ru: 'Номер сертификата не должен быть пустым'
                },
                entry_not_found: {
                    kk: 'Осындай нөмірмен сертификат табылмады',
                    ru: 'Не найден сертификат с таким номером'
                },
                entry_found: {
                    kk: 'Келесі сертификат табылды',
                    ru: 'Найден следующий сертификат'
                },
                full_name: {
                    kk: 'Аты жөні',
                    ru: 'Фамилия Имя'
                },
                course_name: {
                    kk: 'Курстың атауы',
                    ru: 'Название курса'
                },
                spent_hours: {
                    kk: 'Сағат саны',
                    ru: 'Количество часов'
                },
                start_date: {
                    kk: 'Басталған күні',
                    ru: 'Дата начала'
                },
                end_date: {
                    kk: 'Аяқталған күні',
                    ru: 'Дата завершения'
                },
                certificate_number: {
                    kk: 'Сертификат нөмірі',
                    ru: 'Номер сертификата'
                },
                loading: {
                    kk: 'Жүктелуде...',
                    ru: 'Загрузка...'
                }
            },
        }
    },
    methods: {
        t( key ) {
            if( Object.hasOwn( this.messages, key) )
                return this.messages[ key ][ this.locale ]
            else return key
        },
        changeLocale( locale ) {
            this.locale = ( locale === 'ru' ) ? 'ru' : 'kk'
            localStorage.setItem( 'certificate_check_locale', this.locale )
            this.setTitle()
        },
        restoreLocale() {
            this.changeLocale( localStorage.getItem( 'certificate_check_locale' ) )
        },
    },
    created() {
        this.restoreLocale()
    },
}