'use strict';

import './SkillItem.scss';
import SkillItemTemplate from './SkillItem.hbs';


export default class AboutComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        this._parent.innerHTML = SkillItemTemplate(context);
    }
    render(context) {
        this._renderTemplate(context)
    }
}
