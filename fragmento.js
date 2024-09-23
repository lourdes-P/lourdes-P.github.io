
class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Jaws The Revenge</p>
        `;
    }
}

customElements.define("team-LMP", MiComponente123);