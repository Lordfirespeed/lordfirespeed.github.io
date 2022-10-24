fetch("/assets/navbar.html")
    .then(stream => stream.text())
    .then(text => define(text))

function define(html) {
    class NavBar extends HTMLElement {
        on_document_loaded() {
            Array.prototype.forEach.call(
                this.getElementsByClassName("nav-link"),
                (nav_link_element) => {
                    if (nav_link_element.pathname !== window.location.pathname) {return}
                    console.log("mug")

                    nav_link_element.classList.add("active");
                    nav_link_element.setAttribute("aria-current","page");
                }
            );
        }

        constructor() {
            super();

            this.innerHTML = html;

            if (document.readyState === "loading") {
                addEventListener("DOMContentLoaded", this.on_document_loaded)
            }
            else {
                this.on_document_loaded()
            }
        }
    }

    customElements.define("nav-bar", NavBar)
}