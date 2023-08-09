// Créer un observateur d'intersection
const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-up');
        } else {
            entry.target.classList.remove('show-up');
        }
    });
});

// Sélectionner tous les éléments cachés à observer
const hiddenElementsUp = document.querySelectorAll('.hidden-up');
hiddenElementsUp.forEach((el) => {
    observerUp.observe(el);
});

// Créer un observateur d'intersection
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left');
        } else {
            entry.target.classList.remove('show-left');
        }
    });
});

// Sélectionner tous les éléments cachés à observer
const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => {
    observerLeft.observe(el);
});

// Créer un observateur d'intersection
const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right');
        } else {
            entry.target.classList.remove('show-right');
        }
    });
});

// Sélectionner tous les éléments cachés à observer
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => {
    observerRight.observe(el);
});

// Créer un observateur d'intersection
const observerDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-down');
        } else {
            entry.target.classList.remove('show-down');
        }
    });
});

// Sélectionner tous les éléments cachés à observer
const hiddenElementsDown = document.querySelectorAll('.hidden-down');
hiddenElementsDown.forEach((el) => {
    observerDown.observe(el);
});