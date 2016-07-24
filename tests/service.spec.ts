import {I18nService} from "../src/I18nService";

var lang = {
    defaultLang: 'en',
    lang: {
        "true": {
            en: "True",
            es: "Verdadero"
        },
        "false": {
            en: "False",
            es: "Falso"
        },
    }
};
export function main() {
    describe('Service', () => {
        let i18n:I18nService;

        beforeEach(() => {
            i18n = new I18nService();
            i18n.init(lang);
        });

        it('is defined', () => {
            expect(I18nService).toBeDefined();
            expect(i18n instanceof I18nService).toBeTruthy();
        });

        it('simple translations', () => {
            expect(i18n.translate("true")).toBe("True");
            expect(i18n.translate("false")).toBe("False");
            i18n.setUserLang('es');
            expect(i18n.translate("true")).toBe("Verdadero");
            expect(i18n.translate("false")).toBe("Falso");
        });

        it('translate non existent key', () => {
            expect(i18n.translate("xxx")).toBe("xxx");
        });

    });
}