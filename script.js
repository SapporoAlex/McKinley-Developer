console.log('script.js loaded');

function openingVanish() {
    setTimeout(() => {
        const openingOverlay = document.querySelector('.opening_wrapper');
        const lottieCharade = document.querySelector('.lottie_charade');
        
        if (openingOverlay) openingOverlay.classList.add('u-hidden');
        if (lottieCharade) lottieCharade.classList.add('u-hidden');
    }, 1600);
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openingVanish);
} else {
    openingVanish();
}
