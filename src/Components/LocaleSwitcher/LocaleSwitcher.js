'use strict';

import './LocaleSwitcher.scss';
import LocaleSwitcherTemplate from './LocaleSwitcher.hbs';
import I18n from "../../Utils/LocaleAdapter";

const locales = {
    ru: '/Images/russia.svg',
    en: '/Images/uk.svg'
};

export default class LocaleSwitcherComponent {

    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(){
        this._parent.innerHTML = LocaleSwitcherTemplate();

        let image = this._parent.getElementsByClassName('locale-switcher_img').item(0);
        if(I18n.language === 'ru'){
            image.src = locales.ru;
        }
        else{
            image.src = locales.en;
        }
    }

    render() {
        this._renderTemplate();
    }

}
