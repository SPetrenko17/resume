'use strict';

import BaseView from '../BaseView';
import ResumeTemplate from './ResumeTemplate.hbs'
import AboutComponent from '../../Components/About/About'
import ContactsComponent from '../../Components/Contacts/Contacts'
import NavBarComponent from "../../Components/NavBar/NavBar";
import SkillsComponent from "../../Components/Skills/Skills";
import StudyComponent from "../../Components/Study/Study";
import './Resume.scss'

const blockComponents = [
    {component: AboutComponent,
        context: {
        imageSrc:'/Images/tech.jpg',
            text:` Привет, я фронтенд разработчик из Москвы. Интересуюсь современными технологиями
                            и хочу сделать веб быстрее, выше, и сильнее! Разрабатывать приложения начал на 1 курсе
                            университета. Стартовал с мобильной разработки под Android и IOS. На втором курсе зачислен
                            в Технопарк Mail.ru. Изучал алгоритмы и структуры данных, углубленный курс C++ и основы веба.
                            С некоторых времен нашел себя в фронтенде. С интересом изучаю новые технологии в мире веб-разработки
                            и UI/UX.`
    }},
    {component: SkillsComponent, context: {
        skills:[
                {imageSrc:'/Images/html-logo.png',
                    skill:`HTML5 Верстаю днем и ночью. Использую методолгию БЭМ.`},

                {imageSrc:'/Images/css-logo.png',
                    skill:`CSS - хорошо, а с пост/пре-процессорами еще лучше. Предпочитаю писать стили
                                на SCSS, используя все его возможности.`},

                {imageSrc:'/Images/adaptive-logo.png',
                    skill:`Адаптивная верстка. Верстаю на grid и flex. Разработанный продукт
                                выглядит отлично на всех устройствах.`},

                {imageSrc:'/Images/webpack-logo.png',
                    skill:`Бандлеры. Для разработки веб-приложений использую Webpack
                                для оптимальной работы и корректной сборки проекта`},

                {imageSrc:'/Images/handlebars-logo.png',
                    skill:`Шаблонизация. Предпочитаю Handlebars в своих проектах, но
                                люблю изучать новые.`},

                {imageSrc:'/Images/git-logo.svg',
                    skill:`Контроль версий. Прекрасно работаю в команде и умею пользоваться системой
                                контроля версий.`},

                {imageSrc:'/Images/postgres-logo.png',
                    skill:`Базы данных - люблю и плачу. Дима помоги что-нибудь сюда написать ;(
                                Что-то про пострю`},

                {imageSrc:'/Images/docker-logo.png',
                    skill:`Контейнеризация - люблю и плачу. Дима помоги что-нибудь сюда написать ;(
                                Что-то про докер`},
            ]}
            },
    {component: StudyComponent, context: {
        events:[
                {date:'Сентябрь 2018', event:'Зачислен на первый курс МГТУ им. Баумана'},
                {date:'Сентябрь 2019', event:'Зачислен на открытый курс разработки на Android'},
                {date:'Январь 2019', event:'Зачислен на открытый курс разработки на IOS'},
                {date:'Сентябрь 2019', event:'Зачислен на 1 семестр основной программы Технопарка'},
                {date:'Январь 2019', event:'Зачислен на 2 семестр основной программы Технопарка'},
            ]},
        },
    {component: ContactsComponent, context: {
        contacts:[
                {imageSrc:'/Images/telegram-logo.svg', type:'Телеграм',link:''},
                {imageSrc:'/Images/vk-logo.svg', type:'ВКонтакте',link:''},
                {imageSrc:'/Images/mail-logo.svg', type:'Почта',link:''},
                {imageSrc:'/Images/github-logo.svg', type:'Гитхаб',link:''},
            ]},
    }
];
export default class ResumeView extends BaseView{

    constructor(app = document.getElementById('application')) {
        super(app);
    }


    /** Отрисовка страницы со списком кафе */
    render() {
        this._app.innerHTML = ResumeTemplate();
        let blocks = this._app.getElementsByClassName(
            'resume-page__container__block');
        for(let i = 0; i < blocks.length; i++){
            const component = new blockComponents[i].component(blocks.item(i));
            component.render(blockComponents[i].context);
        }
        const resumePage = this._app.getElementsByClassName('resume-page').item(0);
        const navBar = document.createElement('div');
        const navBarComponent = new NavBarComponent(navBar).render();
        resumePage.appendChild(navBar);


    }
}
