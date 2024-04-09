function selectSession(id){
    model.inputs.main.sessionId = id;
    updateView();
}

function rateSession(sessionId, rating){
    const session = findSession(sessionId);
    session.rating = rating;
    updateView();
}

function findSession(sessionId) {
    for (let session of model.data.sessions) {
        if (session.id == sessionId) {
            return session;
        }
    }
    return null;
}