function logOut(){
    model.app.user = null;
    goToPage(null);
}

function goToPage(page){
    model.app.page = page;
    updateView();
}