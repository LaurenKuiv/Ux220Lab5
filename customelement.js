class LaurenElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Lauren was here";
    }
}

customElements.define("x-lauren", LaurenElement);