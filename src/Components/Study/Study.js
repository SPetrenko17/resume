'use strict';

import './Study.scss';
import StudyTemplate from './Study.hbs';
import StudyItemTemplate from '../StudyItem/StudyItem.hbs'
import I18n from "../../Utils/LocaleAdapter";


export default class StudyComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        let events = context.events.map((event) => {
            return StudyItemTemplate({date: event.date , event: event.event, skills: event.skills });
        });
        this._parent.innerHTML = StudyTemplate({title:I18n.t('page.education'), studyItems: events});
    }

    render(context) {
        this._renderTemplate(context)
    }
}
