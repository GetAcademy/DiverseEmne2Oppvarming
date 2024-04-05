const model = {
    app: {
        user: 'terje',
    },
    inputs: {
        orderSession: {
            otherUserId: 'per',
            dateAndTime: '2024-04-05 12:00',
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
            { id: 1, idA: 'terje', idB: 'per', dateAndTime: '2024-04-05 12:00', 
                commentA: 'Bra økt, snakkes på torsdag',
                commentB: '',
            },
            { id: 2, idA: 'pål', idB: 'espen', dateAndTime: '2024-04-05 12:00'},         
        ],
    }
};