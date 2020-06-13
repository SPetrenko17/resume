'use strict';

import './Contacts.scss';
import ContactsTemplate from './Contacts.hbs';
import ContactItem from "../ContactItem/ContactItem.hbs";


export default class ContactsComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        let contacts = context.contacts.map((contact) => {
            return ContactItem({imageSrc: contact.imageSrc , type: contact.type });
        });
        this._parent.innerHTML = ContactsTemplate({contactItems: contacts});
    }

    render(context) {
        this._renderTemplate(context)
    }
}
