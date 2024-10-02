function updateViewProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Profil ${model.app.user}</h1>
        ${createFriendListHtml()}    
        ${createChatHtml()}    
    `;
}

function createChatHtml() {
    const user = model.app.user;
    const otherUser = model.inputs.profile.user;
    let html = `<h3>Chat med ${otherUser}</h3>`;
    for (let message of model.data.messages) {
        if ((message.fromUser == user || message.toUser == user)
        && (message.fromUser == otherUser || message.toUser == otherUser)) {
            const textAlign = message.fromUser == user ? 'right' : 'left';
            html += /*HTML*/`
                <p class="message" style="text-align: ${textAlign}">
                    ${message.text}
                </p>        
            `;
        }
    }
    return html;
}

function createFriendListHtml() {
    let html = '<h3>Venner</h3>';
    const user = model.app.user;
    for (let friendship of model.data.friendships) {
        if (friendship.user1 == user || friendship.user2 == user) {
            const friend = friendship.user1 == user ? friendship.user2 : friendship.user1;
            html += /*HTML*/`
                <li>
                    <a href="javascript:selectChat('${friend}')">${friend}</a>
                    (siden ${new Date(friendship.since).toLocaleDateString()})
                </li>        
            `;
        }
    }
    return html;
}

function createFriendListHtmlx() {
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

