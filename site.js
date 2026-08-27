(function () {
    'use strict';

    var header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
        var revealEls = document.querySelectorAll('.reveal');
        if (revealEls.length && 'IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

            revealEls.forEach(function (el) { observer.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add('visible'); });
        }
    } else {
        document.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.add('visible');
        });
    }

    var carousel = document.querySelector('.screenshot-carousel');
    if (carousel && !reducedMotion) {
        var track = carousel.querySelector('.screenshot-carousel-track');
        if (track && track.scrollWidth > carousel.clientWidth) {
            var paused = false;
            carousel.addEventListener('mouseenter', function () { paused = true; });
            carousel.addEventListener('mouseleave', function () { paused = false; });
            carousel.addEventListener('touchstart', function () { paused = true; }, { passive: true });
            carousel.addEventListener('touchend', function () { paused = false; }, { passive: true });

            var direction = 1;
            function autoScroll() {
                if (!paused && document.visibilityState === 'visible') {
                    carousel.scrollLeft += direction * 0.6;
                    var max = track.scrollWidth - carousel.clientWidth;
                    if (carousel.scrollLeft >= max - 2) direction = -1;
                    if (carousel.scrollLeft <= 2) direction = 1;
                }
                requestAnimationFrame(autoScroll);
            }
            requestAnimationFrame(autoScroll);
        }
    }
})();
