'use strict';

import './StudyItem.scss';
import StudyItemTemplate from './StudyItem.hbs';


export default class StudyItemComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        this._parent.innerHTML = StudyItemTemplate(context);
    }
    render(context) {
        this._renderTemplate(context)
    }
}
