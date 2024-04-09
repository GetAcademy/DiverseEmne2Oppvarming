// Pauset til 10:35

function login() {
    let userId = findUser();
    if (userId == null) {

    } else {
        model.app.page = 'orderSession';
        model.app.user = userId;
        updateView();
    }
}

function findUser() {
    for (let user of model.data.users) {
        if (user.id == model.inputs.login.userId
            && user.password == model.inputs.login.password) {
            return user.id;
        }
    }
    return null;
}
