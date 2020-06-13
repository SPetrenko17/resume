'use strict';

import './About.scss';
import AboutTemplate from './About.hbs';


export default class AboutComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        this._parent.innerHTML = AboutTemplate(context);
    }
    render(context) {
    this._renderTemplate(context)
    }
}
