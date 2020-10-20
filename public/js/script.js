// Effet d'ondulation
let rippleLink = document.querySelectorAll('.nav-link');
rippleLink.forEach(link => {
    link.addEventListener('click', function(e) {
        // Récupérer les coordonnées du click
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        //Créer l'élément d'ondulation
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        
        //Et le supprimer a la fin de l'effet
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})