function updateViewLogin(){
    document.getElementById('app').innerHTML = /*HTML*/`
        Brukernavn:<br/>
        <input 
            type="text"
            oninput="model.inputs.login.userId=this.value"
            value="${model.inputs.login.userId ?? ''}"            
            /><br/>
        Passord<br/>
        <input 
            type="password"
            oninput="model.inputs.login.password=this.value"
            value="${model.inputs.login.password ?? ''}"            
            /><br/>
        <div class="error">${model.inputs.login.errorMessage ?? ''}</div>
        <button onclick="login()">Logg inn</button>    
    `;
}