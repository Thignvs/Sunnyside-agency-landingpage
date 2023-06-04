
    const hamburger = document.getElementById("hamburger");

    function toggleMenu(){
        const navMenu = document.getElementById('nav-bar')
        navMenu.classList.toggle('active')
    }

    hamburger.addEventListener('click', toggleMenu)


    
    function closeMenu() {
        var menu = document.getElementById("nav-bar");
        menu.classList.remove('active');
    }
    
    function scrnSizeVrfy() {
        var wWidth = window.innerWidth;                //auto close hamburger menu
    
        if (wWidth >= 768) {
            closeMenu();
        }
    }
    window.addEventListener("resize", scrnSizeVrfy);