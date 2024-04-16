const model = {
    app: {
        user: 'terje',
        page: 'profile',
    },
    inputs: {
        orderSession: {
            otherUserId: 'per',
            dateAndTime: null,
        },
        feedback: {
            session: 1,
            comment: 'Bra økt, snakkes på torsdag',
        }, 
        login: {
            userId: null,
            password: null,
            errorMessage: null,
        },
        main: {
            sessionId: null,
        },
    },
    data: {
        friendships: [
            {user1: 'per', user2: 'pål', since: '2020-01-01'},
            {user1: 'per', user2: 'espen', since: '2020-01-01'},
            {user1: 'per', user2: 'terje', since: '2020-01-01'},
            {user1: 'terje', user2: 'espen', since: '2020-01-01'},
        ],
        users: [
            {id: 'terje', password: 't'},
            {id: 'per', password: 'p'},
            {id: 'pål', password: 'p'},
            {id: 'espen', password: 'e'},
        ],
        sessions: [
            { id: 1, userIdA: 'terje', userIdB: 'per', dateAndTime: '2024-04-05 12:00', 
                commentA: 'Bra økt, snakkes på torsdag',
                commentB: '',
                rating: 4,
            },
            { id: 2, userIdA: 'pål', userIdB: 'espen', dateAndTime: '2024-04-05 12:00'},         
        ],
    }
};