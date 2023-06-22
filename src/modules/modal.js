const modal = () => {

    const modal = document.querySelector('.modal-callback')//');
    const modalOverlay = document.querySelector('.modal-overlay');
    const buttons = document.querySelectorAll('.callback-btn');
    const buns = document.querySelectorAll('.services-section .element .img-wrapper');
    const els = document.querySelectorAll('.services-section .element ');
    const closeBtn = modal.querySelector('.modal-close');
    console.log(buns);
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block';
            modalOverlay.style.display = 'block';

        });
    });
    buns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            //if (e.target.classList.contains('img-wrapper')) {
            console.log(e.target);
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            console.log("Клик на псевдоэлементе!");
            // }


        });
    });


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';

    });
    document.addEventListener('click', e => {
        if (e.target === closeBtn || e.target === modalOverlay) {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    });

}
module.exports = modal;