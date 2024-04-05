const model = {
    app: {
        user: 'terje',
        page: null,
    },
    inputs: {
        orderSession: {
            otherUserId: 'per',
            dateAndTime: null,
        },
        feedback: {
            session: 1,
            comment: 'Bra økt, snakkes på torsdag',
        }
    },
    data: {
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
            },
            { id: 2, userIdA: 'pål', userIdB: 'espen', dateAndTime: '2024-04-05 12:00'},         
        ],
    }
};