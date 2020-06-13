'use strict';

import './Study.scss';
import StudyTemplate from './Study.hbs';
import StudyItemTemplate from '../StudyItem/StudyItem.hbs'


export default class StudyComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        let events = context.events.map((event) => {
            return StudyItemTemplate({date: event.date , event: event.event });
        });
        this._parent.innerHTML = StudyTemplate({studyItems: events});
    }

    render(context) {
        this._renderTemplate(context)
    }
}
