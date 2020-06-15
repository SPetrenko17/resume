'use strict';

import BaseView from '../BaseView';
import I18n from "../../Utils/LocaleAdapter";
import ResumeTemplate from './ResumeTemplate.hbs'
import AboutComponent from '../../Components/About/About'
import ContactsComponent from '../../Components/Contacts/Contacts'
import NavBarComponent from "../../Components/NavBar/NavBar";
import SkillsComponent from "../../Components/Skills/Skills";
import StudyComponent from "../../Components/Study/Study";
import './Resume.scss'
import LocaleSwitcherComponent from "../../Components/LocaleSwitcher/LocaleSwitcher.js";

const locales = {
    ru: '/Images/russia.svg',
    en: '/Images/uk.svg'
};


export default class ResumeView extends BaseView{

    constructor(app = document.getElementById('application')) {
        super(app);
    }


    /** Отрисовка страницы со списком кафе */
    render() {
        const blockComponents = [
            {component: AboutComponent,
                context: {
                    imageSrc:'/Images/tech.jpg',
                    text:I18n.t('page.aboutText')
                }},
            {component: SkillsComponent, context: {
                    skills:[
                        {imageSrc:'/Images/html-logo.png',
                            skill:I18n.t('page.skills.Html')},

                        {imageSrc:'/Images/css-logo.png',
                            skill:I18n.t('page.skills.Css')},

                        {imageSrc:'/Images/adaptive-logo.png',
                            skill:I18n.t('page.skills.Adaptive')},

                        {imageSrc:'/Images/webpack-logo.png',
                            skill:I18n.t('page.skills.Webpack')},

                        {imageSrc:'/Images/handlebars-logo.png',
                            skill:I18n.t('page.skills.Handlebars')},

                        {imageSrc:'/Images/git-logo.svg',
                            skill:I18n.t('page.skills.Git')},

                        {imageSrc:'/Images/postgres-logo.png',
                            skill:I18n.t('page.skills.Postgres')},

                        {imageSrc:'/Images/docker-logo.png',
                            skill:I18n.t('page.skills.Docker')},
                    ]}
            },
            {component: StudyComponent, context: {
                    events:[
                        {
                            date:I18n.t('page.study.date.1'),
                            event:I18n.t('page.study.events.1'),
                            skills:[
                                I18n.t('page.study.skills.1')
                            ]
                        },
                        {
                            date:I18n.t('page.study.date.2'),
                            event:I18n.t('page.study.events.2'),
                            skills:[
                                I18n.t('page.study.skills.2')
                            ]
                        },
                        {
                            date:I18n.t('page.study.date.3'),
                            event:I18n.t('page.study.events.3'),
                            skills:[
                                I18n.t('page.study.skills.3')
                            ]
                        },
                        {
                            date:I18n.t('page.study.date.4'),
                            event:I18n.t('page.study.events.4'),
                            skills:[
                                I18n.t('page.study.skills.4')
                            ]},
                        {
                            date:I18n.t('page.study.date.5'),
                            event:I18n.t('page.study.events.5'),
                            skills:[
                                I18n.t('page.study.skills.5')
                            ]},
                    ]},
            },
            {component: ContactsComponent, context: {
                    contacts:[
                        {imageSrc:'/Images/telegram-logo.svg', type:I18n.t('page.contacts.tg'),link:'https://t.me/p_Sergei'},
                        {imageSrc:'/Images/vk-logo.svg', type:I18n.t('page.contacts.vk'),link:'https://vk.com/sergeiptrnk'},
                        {imageSrc:'/Images/mail-logo.svg', type:I18n.t('page.contacts.mail'),link:'mailto:SPetrenko17@yandex.ru'},
                        {imageSrc:'/Images/github-logo.svg', type:I18n.t('page.contacts.github'),link:'https://github.com/SPetrenko17'},
                    ]},
            }
        ];
        this._app.innerHTML = ResumeTemplate({title:I18n.t('page.resume')});
        let blocks = this._app.getElementsByClassName(
            'resume-page__container__block');
        for(let i = 0; i < blocks.length; i++){
            const component = new blockComponents[i].component(blocks.item(i));
            component.render(blockComponents[i].context);
        }
        const resumePage = this._app.getElementsByClassName('resume-page').item(0);
        const navBar = document.createElement('div');
        navBar.style.position = 'absolute';
        const navBarComponent = new NavBarComponent(navBar).render();
        resumePage.appendChild(navBar);

        const localeSwitcher = document.createElement('div');
        localeSwitcher.style.position = 'absolute';
        const localeSwitcherComponent = new LocaleSwitcherComponent(localeSwitcher).render();
        resumePage.appendChild(localeSwitcher);
        this._addListeners();



    }

    _addListeners(){
        let switcher = this._app.getElementsByClassName('locale-switcher').item(0);
        switcher.addEventListener('click',()=>{
            if(I18n.language === 'ru'){
                I18n.setLanguage('en');
            }
            else{
                I18n.setLanguage('ru');
            }
            this.render();
        });
        const points = [];
        points.push(document.getElementsByClassName('resume-page__header_h4').item(0).getBoundingClientRect().top);
        points.push(document.getElementsByClassName('skills-component_h4').item(0).getBoundingClientRect().top);
        points.push(document.getElementsByClassName('study-component_h4').item(0).getBoundingClientRect().top);
        points.push(document.getElementsByClassName(' contacts-component_h4').item(0).getBoundingClientRect().top);
        let circles = document.getElementsByClassName('navbar-container__circles__circle');
        for(let i = 0; i < circles.length; i++){
            circles.item(i).addEventListener('click',()=>{
                window.scrollTo({
                    top: points[i],
                    left: 0,
                    behavior: 'smooth'
                });
            })
        }
    }
}
