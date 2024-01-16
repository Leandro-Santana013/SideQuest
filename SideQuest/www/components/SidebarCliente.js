export class SidebarCliente extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=
        document.addEventListener("DOMContentLoaded", function () {
            var styleElement = document.createElement("style");
            styleElement.innerHTML = `
                .sidebarCliente {
                    
                }
            `;
        
            var sidebarElement = document.createElement("div");
            sidebarElement.className = "sidebarCliente";
        
            var optionsElement = document.createElement("div");
            optionsElement.className = "options";
        
            for (var i = 0; i < 4; i++) {
                var optionElement = document.createElement("div");
                optionElement.className = "option";
                optionElement.innerHTML = `
                    <i class="a"></i>
                    <p>house</p>
                `;
                optionsElement.appendChild(optionElement);
            }
        
            var configElement = document.createElement("div");
            configElement.className = "config";
        
            var configOptionElement = document.createElement("div");
            configOptionElement.className = "option";
            configOptionElement.innerHTML = `
                <i class="a"></i>
                <p>Configurações</p>
            `;
            
            configElement.appendChild(configOptionElement);
            sidebarElement.appendChild(optionsElement);
            sidebarElement.appendChild(configElement);
        
            document.head.appendChild(styleElement);
            document.body.appendChild(sidebarElement);
        });
    }
}

customElements.define('sidebar-cliente', SidebarCliente);
