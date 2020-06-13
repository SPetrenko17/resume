'use strict';

import './NavBar.scss';
import NavBarTemplate from './NavBar.hbs';


export default class NavBarComponent {
    constructor(parent = document.getElementById('application')) {
        this._parent = parent;
    }

    _renderTemplate(context){
        this._parent.innerHTML = NavBarTemplate(context);
    }
    render(context) {
        this._renderTemplate(context)
    }
}
