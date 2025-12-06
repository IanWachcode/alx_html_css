const hamburger = document.getElementById( 'hamburger' );
const navLinks = document.getElementById( 'navLinks' );

hamburger.addEventListener( 'click', () =>
    {
    navLinks.classList.toggle( 'active' );

        // Optional: animate hamburger to X
    hamburger.classList.toggle( 'active' );
    navLinks.classList.toggle( 'active' );
} );
//
document.querySelectorAll("#navLinks a").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    })
);