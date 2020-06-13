import Router from '../utils/Router';
import ResumeView from "../Views/ResumeView/ResumeView";

/** Регистрация сервис воркера */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.worker.js', {scope: '/'})
        .then((reg) => {
            console.log('Registration succeeded. Scope is ' + reg);

        }).catch((error) => {
            console.log('Registration failed with ' + error);
        });
}


const html = document.getElementsByTagName('html').item(0);
const theme = localStorage.getItem('theme');
html.className = theme ? theme : 'theme-light';

let app = document.getElementById('application');
export const router = new Router();


function makeResume(){
    const resumeView = new ResumeView(app);
    resumeView.render();

}

/** Роуты роутера */
router.get('/resume', makeResume);
router.init();

