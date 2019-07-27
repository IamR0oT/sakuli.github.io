import { $$, createToggle } from "./dom-utils";

(() => {

    $$('.section-navigation:first-child > ul').forEach(e => {
        Array.from(e.querySelectorAll('li')).forEach(e => {
            const childList = e.querySelector('ul');
            const isActive = !!(e.querySelector('a.active'));
            const toggleInit: [string, string] = isActive ? ['block', 'none'] : ['none', 'block'];
            const toggleDisplay = createToggle(childList.style, 'display', toggleInit)
            const icon = e.querySelector('i');
            if (icon) {
                icon.addEventListener('click', evt => {
                    toggleDisplay();
                    evt.stopPropagation();
                })
            }
        })
    })

})();
