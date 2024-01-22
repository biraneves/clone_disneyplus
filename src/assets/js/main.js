document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const sectionHero = document.querySelector('.hero');
    const heroHeight = sectionHero.clientHeight;

    window.addEventListener('scroll', () => {
        const presentPosition = window.scrollY;

        if (presentPosition <= heroHeight) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    });

    // Attractions, tabs behavior
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            const targetTab = e.target.dataset.tabButton;

            hideAllTabs();
            cleanButtonsBorder(buttons);
            showTab(targetTab);
            setButtonBorder(e.target);
        });
    });

    // FAQ, accordion behavior
    questions.forEach(question => {
        question.addEventListener('click', e => {
            const selectedQuestion = e.target;

            toggleAnswer(selectedQuestion);
        });
    });
});

function hideAllTabs() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    tabs.forEach(tab => {
        tab.classList.remove('shows__list--is-active');
    });
}

function showTab(tabName) {
    const tab = document.querySelector(`[data-tab-id=${tabName}]`);

    tab.classList.add('shows__list--is-active');
}

function cleanButtonsBorder(buttons) {
    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    });
}

function setButtonBorder(button) {
    button.classList.add('shows__tabs__button--is-active');
}

function toggleAnswer(question) {
    question.parentNode.classList.toggle('faq__questions__item--is-open');
}

function hideHeaderElements() {
    const header = document.querySelector('header');

    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');

    header.classList.remove('header--is-hidden');
}
