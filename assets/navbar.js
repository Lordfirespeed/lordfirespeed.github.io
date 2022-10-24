fetch("/assets/navbar.html")
    .then(stream => stream.text())
    .then(text => define(text))

function define(html) {
    class NavBar extends HTMLElement {
        constructor() {
            super();

            this.innerHTML = html;

            Array.prototype.forEach.call(
                this.getElementsByClassName("nav-link"),
                (nav_link_element) => {
                    if (nav_link_element.href !== window.location.href) {return}

                    nav_link_element.classList.add("active");
                    nav_link_element.setAttribute("aria-current","page");
                }
            );
        }
    }

    customElements.define("nav-bar", NavBar)
}