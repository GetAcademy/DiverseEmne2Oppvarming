function invite(userId) {
    const session = {
        id: findMaxId() + 1,
        userIdA: model.app.user,
        userIdB: userId,
        dateAndTime: model.inputs.orderSession.dateAndTime,
    };
    model.data.sessions.push(session);
    updateView();
}

function findMaxId() {
    let maxId = -1;
    for (let session of model.data.sessions) {
        if (session.id > maxId) maxId = session.id;
    }
    return maxId;
}
