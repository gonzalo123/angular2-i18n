# angular2-i18n
Simple i18n service and pipe for angular2

* [Installation](#installation)
* [Usage](#usage)

## Installation
First you need to install the npm module:
```sh
npm install angular2-i18n --save
```

## Usage

Service:

```js
let lang = {
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
    
i18n:I18nService = new I18nService();
i18n.init(lang);

let text:string = i18n.translate("true");

```

Pipe:
```js`
{{ "true" | i18n }}
``

