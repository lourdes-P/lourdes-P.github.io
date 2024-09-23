
class MiComponentelmp extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Jaws The Revenge</p>
        `;
    }
}

customElements.define("team-lmp", MiComponentelmp);