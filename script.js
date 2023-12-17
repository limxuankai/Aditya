function revealContent() {
    var landingPage = document.getElementById('landing-page');

    if (landingPage && window.getComputedStyle(landingPage).display === 'block') {
        landingPage.style.display = 'none';

        var elementsWithClassK = document.getElementsByClassName('k');
        for (var i = 0; i < elementsWithClassK.length; i++) {
            elementsWithClassK[i].style.display = 'block';
        }
    }
}