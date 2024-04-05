function updateViewOrderSession(){
    document.getElementById('app').innerHTML = /*HTML*/`
            <h1>Parprogrammering</h1>
            <b>Tidspunkt</b><br/>
            <input 
                type="datetime-local"
                oninput="model.inputs.orderSession.dateAndTime=this.value"
                value="${model.inputs.orderSession.dateAndTime ?? ''}"
                /><br/>
            ${createUsersHtml()}<br/>
        `;
}

function createUsersHtml() {
    let usersHtml = '';
    for (let user of model.data.users) {
        if (user.id != model.app.user) {
            usersHtml += /*HTML*/`
            <button onclick="invite('${user.id}')">Inviter 
                ${user.id}
            </button>
        `;
        }
    }
    return usersHtml;
}