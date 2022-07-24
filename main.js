document.addEventListener('DOMContentLoaded', () => {
    const headerNav = document.querySelector('.header-nav');

    const options = {
        rootMargin: "100% 0% 100% 0%",
        threshold: 1.0
    }
    
    const observer = new IntersectionObserver(entries => {
        for(entry of entries) {
            if (entry.isIntersecting) {
                // if entry is on screen
                if (entry.target.classList.contains('first-nav-item')) { 
                    headerNav.classList.remove('first-item-shadow');
                } else {
                    headerNav.classList.remove('last-item-shadow');
                }
            } else {
                // if entry is NOT on screen
                if (entry.target.classList.contains('first-nav-item')) { 
                    headerNav.classList.add('first-item-shadow');
                } else {
                    headerNav.classList.add('last-item-shadow');
                }
            }
        }
    }, options);

    [document.querySelector(".first-nav-item"), document.querySelector(".last-nav-item")].forEach(element => {
        observer.observe(element);
    });
});