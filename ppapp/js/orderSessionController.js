function invite(userId) {
    const session = {
        id: findMaxId() + 1,
        userIdA: model.app.user,
        userIdB: userId,
        dateAndTime: model.inputs.orderSession.dateAndTime,
    };
    model.data.sessions.push(session);
    model.app.page = 'main';
    updateView();
}

function findMaxId() {
    let maxId = -1;
    for (let session of model.data.sessions) {
        if (session.id > maxId) maxId = session.id;
    }
    return maxId;
}

// eksempel på å finne objekt i en array ut fra id - brukes ikke her
function getSessionFromId(id) {
    for (let session of model.data.sessions) {
        if (session.id == id) return session;
    }
    return null;
}
