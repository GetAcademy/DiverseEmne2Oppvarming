function updateViewShowSessions(){
    document.getElementById('app').innerHTML = /*HTML*/`
            <h1>Planlagte parprogrammeringssesjoner</h1>
            ${createSessionsHtml()}
        `;
}


function createSessionsHtml() {
    let sessionsHtml = '';
    for (let session of model.data.sessions) {
        sessionsHtml += /*HTML*/`
            <div>
                ${session.id}
                ${session.userIdA}
                ${session.userIdB}
                ${session.dateAndTime}
            </div>
        `;
    }
    return sessionsHtml;
}