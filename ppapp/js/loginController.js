function login() {
    let userId = findUser();
    const login = model.inputs.login;
    if (userId == null) {
        login.errorMessage = 'Feil brukernavn og/eller passord';
    } else {
        model.app.page = 'main';
        model.app.user = userId;
        login.errorMessage = null;
        login.userId = null;
        login.password = null;
    }
    updateView();
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
