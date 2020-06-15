'use strict';

import './Skills.scss';
import SkillsTemplate from './Skills.hbs';
import SkillItemTemplate from "../SkillItem/SkillItem.hbs";
import I18n from "../../Utils/LocaleAdapter";



export default class SkillsComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        let skills = context.skills.map((skill) => {
            return SkillItemTemplate({imageSrc: skill.imageSrc , skill: skill.skill });
        });
        this._parent.innerHTML = SkillsTemplate({title:I18n.t('page.skills'),skillItems: skills});
    }

    render(context) {
        this._renderTemplate(context)
    }
}
