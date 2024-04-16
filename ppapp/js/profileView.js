function updateViewProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Profil ${model.app.user}</h1>
        ${createFriendListHtml()}    
    `;
}

function createFriendListHtmlx() {
    let html = '<h3>Venner</h3>';
    const user = model.app.user;
    for (let friendship of model.data.friendships) {
        if (friendship.user1 == user || friendship.user2 == user) {
            const friend = friendship.user1 == user ? friendship.user2 : friendship.user1;
            html += /*HTML*/`
                <li>
                    ${friend} (siden ${new Date(friendship.since).toLocaleDateString()})
                </li>        
            `;
        }
    }
    return html;
}

function createFriendListHtml() {
    const user = model.app.user;
    return model.data.friendships
    .filter(f => f.user1 == user || f.user2 == user)
    .map(f => /*HTML*/`<li>${getFriend(f)} (siden ${new Date(f.since).toLocaleDateString()})</li>`)
    .join('');
}

function getFriend(friendship){
    return friendship.user1 == model.app.user ? friendship.user2 : friendship.user1;
}

function createFriendListHtmlV2B() {
    const user = model.app.user;
    const friends = model.data.friendships.filter(f => f.user1 == user || f.user2 == user);
    const friendHtmls = friends.map(f => {
        const friend = f.user1 == user ? f.user2 : f.user1;
        return /*HTML*/`<li>${friend} (siden ${new Date(f.since).toLocaleDateString()})</li>`;
    })
    return friendHtmls.join('');
}

