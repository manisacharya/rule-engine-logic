export class config {
    
    ruleConfig = {
        "property": "precepted",
        "threshold": 10,
        "operator": ">",
        "time": 30
    };

    userRelationship =
    [
        {
            "userId": 100,
            "userName": "Tim100",
            "name": "Tim Johnson",
            "teamMembers": [
                {
                    "id": 1,
                    "name": "Harry Wilson"
                },
                {
                    "id": 53,
                    "name": "Maggie Smith"
                },
                {
                    "id": 77,
                    "name": "Aliana Burton"
                },
                {
                    "id": 102,
                    "name": "Diana Wilson"
                }
            ]
        },
        {
            "userId": 200,
            "name": "Robin Smith",
            "userName": "Robin200",
            "teamMembers": [
                {
                    "id": 5,
                    "name": "Calcom Wolvs"
                },
                {
                    "id": 89,
                    "name": "Layton Burton"
                },
                {
                    "id": 203,
                    "name": "Scott Wilson"
                }
            ]
        },
        {
            "userId": 300,
            "name": "CEO Smith",
            "userName": "CEO300",
            "teamMembers": [
                {
                    "id": 100,
                    "name": "Tim Johnson"
                },
                {
                    "id": 200,
                    "name": "Robin Smith"
                }
            ]  
        }
    ];

    timesheetData =
    [
        {
            "id": 1,
            "value": 10,
            "time": '2023-10-13'
        },
        {
            "id": 53,
            "value": 20,
            "time": '2023-10-30'
        },
        {
            "id": 77,
            "value": 55,
            "time": '2023-10-23'
        },
        {
            "id": 102,
            "value": 0,
            "time": '2023-05-13'
        },
        {
            "id": 5,
            "value": 9,
            "time": '2023-11-11'
        },
        {
            "id": 89,
            "value": 11,
            "time": '2023-10-13'
        },
        {
            "id": 203,
            "value": 40,
            "time": '2023-10-14'
        },
        {
            "id": 100,
            "value": 20,
            "time": '2023-11-01'
        },
        {
            "id": 200,
            "value": 30,
            "time": '2023-01-02'
        }
    ];
}