//BOTONES
const piezasButton = document.getElementById('piezas-button');
const brandingButton = document.getElementById('branding-button');
const linksButton = document.getElementById('links-button');

//ELEMENTOS
const alejandroImage = document.getElementById('ALEJANDRO');
const ojedaImage = document.getElementById('OJEDA');
const yearImage = document.getElementById('year');
const brillo = document.getElementById('brillo');
const brilloPiezas = document.getElementById('brillo-piezas');
const brilloBranding = document.getElementById('brillo-branding');
const brilloLinks = document.getElementById('brillo-links');

//ANIMACIONES
brillo.addEventListener('animationend', (event) => {
    if (event.animationName === 'brillo-entrance') {
        brillo.classList.remove('brillo-entrance');
        brillo.classList.add('brillo-idle');
    }
});

function triggerFadeOut(element, entranceClassName) {
    element.classList.remove(entranceClassName);
    element.getAnimations().forEach(animation => animation.cancel());
    element.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 100, easing: 'ease-out', fill: 'forwards' }
    );
}

function brandingTriggered(element, entranceClassName) {
    element.classList.remove(entranceClassName);
    element.getAnimations().forEach(animation => animation.cancel());
    element.animate(
        [{ transform: 'translateY(0px) scale(1)' }, { transform: 'translateY(-300px) scale(2)' }],
        { duration: 800, easing: 'cubic-bezier(0, .43, .4, .64)', fill: 'forwards' }
    );
}

function piezasTriggered(element, entranceClassName) {
    element.classList.remove(entranceClassName);
    element.getAnimations().forEach(animation => animation.cancel());

    // Calculate the Center
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    // Calculate Element Offset
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    // Apply Translation
    const translateX = centerX - elementCenterX;
    const translateY = centerY - elementCenterY;

    element.animate(
        [{ transform: 'translate(0, 0) scale(1)' }, { transform: `translate(${translateX}px, ${translateY}px) scale(2)` }],
        { duration: 800, easing: 'cubic-bezier(0, .43, .4, .64)', fill: 'forwards' }
    );
}

function linksTriggered(element, entranceClassName) {
    element.classList.remove(entranceClassName);
    element.getAnimations().forEach(animation => animation.cancel());

    // Calculate the Center
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    // Calculate Element Offset
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    // Apply Translation
    const translateX = centerX - elementCenterX;
    const translateY = centerY - elementCenterY;

    element.animate(
        [{ transform: 'translate(0, 0) scale(1)' }, { transform: `translate(${translateX}px, ${translateY}px) scale(2)` }],
        { duration: 800, easing: 'cubic-bezier(0, .43, .4, .64)', fill: 'forwards' }
    );
}

function brilloDissapear(element, entranceClassName) {
    element.classList.remove(entranceClassName);
    element.getAnimations().forEach(animation => animation.cancel());

    // Calculate the Center
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    // Calculate Element Offset
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    // Apply Translation
    const translateX = centerX - elementCenterX;
    const translateY = centerY - elementCenterY;

    element.animate(
        [{ transform: 'translate(0, 0) scale(1)' }, { transform: `translate(${translateX}px, ${translateY}px) scale(2)`, opacity: 0 }],
        { duration: 800, easing: 'cubic-bezier(0, .43, .4, .64)', fill: 'forwards' }
    );
}

function brilloAppear(element, entranceClassName) {
    element.classList.remove(entranceClassName);
    element.getAnimations().forEach(animation => animation.cancel());

    // Calculate the Center
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    // Calculate Element Offset
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    // Apply Translation
    const translateX = centerX - elementCenterX;
    const translateY = centerY - elementCenterY;

    element.animate(
        [{ transform: 'translate(0, 0) scale(1)' , opacity: 0 }, { transform: `translate(${translateX}px, ${translateY}px) scale(2)`, opacity: 1 }],
        { duration: 800, easing: 'cubic-bezier(0, .43, .4, .64)', fill: 'forwards' }
    );
}

linksButton.addEventListener('click', () => {
    triggerFadeOut(alejandroImage, 'ale-entrance');
    triggerFadeOut(ojedaImage, 'ojeda-entrance');
    triggerFadeOut(yearImage, 'year-entrance');
    triggerFadeOut(brandingButton, 'branding-entrance');
    triggerFadeOut(piezasButton, 'piezas-entrance');
    linksTriggered(linksButton,'links-entrance');
    brilloDissapear(brillo, 'brillo-entrance');
    brilloAppear(brilloLinks, 'brillo-hidden');

    setTimeout(() => {
        window.location.href = '/links.html';
    }, 1000); // 1000 milliseconds (1 second) delay
});

brandingButton.addEventListener('click', () => {
    triggerFadeOut(alejandroImage, 'ale-entrance');
    triggerFadeOut(ojedaImage, 'ojeda-entrance');
    triggerFadeOut(yearImage, 'year-entrance');
    triggerFadeOut(piezasButton, 'piezas-entrance');
    triggerFadeOut(linksButton, 'links-entrance');
    brandingTriggered(brandingButton, 'branding-entrance');
    brilloDissapear(brillo, 'brillo-entrance');
    brilloAppear(brilloBranding, 'brillo-hidden');

    setTimeout(() => {
        window.location.href = '/branding.html';
    }, 1000); // 1000 milliseconds (1 second) delay
});

piezasButton.addEventListener('click', () => {
    triggerFadeOut(alejandroImage, 'ale-entrance');
    triggerFadeOut(ojedaImage, 'ojeda-entrance');
    triggerFadeOut(yearImage, 'year-entrance');
    triggerFadeOut(brandingButton, 'branding-entrance');
    triggerFadeOut(linksButton, 'links-entrance');
    piezasTriggered(piezasButton, 'piezas-entrance');
    brilloDissapear(brillo, 'brillo-entrance');
    brilloAppear(brilloPiezas, 'brillo-hidden');

    setTimeout(() => {
        window.location.href = '/piezas.html';
    }, 1000); // 1000 milliseconds (1 second) delay
});