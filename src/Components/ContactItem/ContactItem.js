'use strict';

import './ContactItem.scss';
import ContactItemTemplate from './ContactItem.hbs';


export default class ContactItemComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        this._parent.innerHTML = ContactItemTemplate(context);
    }
    render(context) {
        this._renderTemplate(context)
    }
}
