function updateViewMain() {
    document.getElementById('app').innerHTML = /*HTML*/`
        Du er logget inn som ${model.app.user}
        <button onclick="goToPage('orderSession')">Legg til parprogrammering</button>
        <button onclick="logOut()">Logg ut</button>
        <hr/>
        <h3>Planlagte parprogrammeringssesjoner</h3>
        ${createSessionsHtml()}
        <hr/>
        ${createRateSessionHtml()}
    `;
}

function createRateSessionHtml() {
    let session = getSelectedSession();
    if (session == null) return '';
    const rating = session.rating;
    return /*HTML*/`
        Valgt sesjon: 
        ${session.userIdA} og ${session.userIdB} 
        <div class="stars">
            <span onclick="rateSession(${session.id}, 1)">${rating > 0 ? '★' : '☆'}</span>
            <span onclick="rateSession(${session.id}, 2)">${rating > 1 ? '★' : '☆'}</span>
            <span onclick="rateSession(${session.id}, 3)">${rating > 2 ? '★' : '☆'}</span>
            <span onclick="rateSession(${session.id}, 4)">${rating > 3 ? '★' : '☆'}</span>
            <span onclick="rateSession(${session.id}, 5)">${rating > 4 ? '★' : '☆'}</span>
        </div>    
    `;
}

// ★☆

function getSelectedSession() {
    const sessionId = model.inputs.main.sessionId;
    let theSession = null;
    for (let session of model.data.sessions) {
        if (session.id == sessionId) {
            theSession = session;
        }
    }
    return theSession;
}

function createSessionsHtml() {
    let sessionsHtml = '';
    for (let session of model.data.sessions) {
        const date = new Date(session.dateAndTime);
        const options = { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleString('nb-NO', options);
        sessionsHtml += /*HTML*/`
            <div>
                ${session.id}
                ${session.userIdA}
                ${session.userIdB}
                ${formattedDate}
                <button onclick="selectSession(${session.id})">velg</button>
            </div>
        `;
    }
    return sessionsHtml;
}

