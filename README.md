
# Letters Game
API server/application built on Nodejs. 

# Requirements
    Node (10.15.0)
    NPM (6.4.1)
    MongoDB (3.6.3)

# Quick Start 
### Install dependencies for server

```
npm install
```

### Make sure MongoDB is running on your system

1. **Open mongo shell by running 'mongo' in command line and create a new database letters-game**

     Shows all mongo databases on the local machine: 
    
    ``` 
    show dbs 
    ```

    Switches to letters-game database: 
    ```
    use letters-game 
    ```
    

2. **Create .env file in the root directory and add:**
    ```
    MONGO_URI = 'mongodb://localhost:27017/letters-game'
    ```

# API Reference
## API Resources: 
- POST /api/dictionaries 
- POST /api/games
- PATCH /api/games/:id

------------------

## POST /api/dictionaries
 - Creates a new Dictionary and populates it with items from dictionary.json file 
### Response: 
```
{
    "words": [
        "array",
        "arrays",
        "art",
        "arts",
        "fab",
        "fast",
        "fat",
        "fist",
        "lift",
        "lifts",
        "lire",
        "list",
        "load",
        "loaf",
        "loft",
        "lost",
        "lure",
        "lust",
        "rant",
        "rat",
        "rats",
        "rent",
        "rest",
        "rust",
        "sat",
        "soft",
        "sort",
        "sos",
        "soy",
        "start",
        "starts",
        "street",
        "tar",
        "tart",
        "tarts",
        "toll",
        "total",
        "toy",
        "toys",
        "tray",
        "trays"
    ],
    "_id": "5dd841315dec778d89662615",
    "__v": 0
}
```
----
## POST /api/games
 - Creates a new game that is affiliated with a dictionary and a generated game board from test-board-1.js file 
## Body: 
|  KEY          |  VALUE            | DESCRIPTION |
| ------------- | ------------------| ----        |
| dictionary_id | ex: 5dd82016763a  |   Unique object identifier 

## Response: 
```
{
    "tiles": [
        [
            "A",
            "B",
            "C",
            "D"
        ],
        [
            "E",
            "F",
            "G",
            "H"
        ],
        [
            "I",
            "J",
            "K",
            "L"
        ],
        [
            "M",
            "N",
            "O",
            "P"
        ]
    ],
    "_id": "5dd843ed4203548d979087d4",
    "dimensions": 4,
    "dictionary": "5dd82016763a1e7caa1f0daf",
    "__v": 0
}
```

----
## PATCH /api/games/:id
 - Validates user selection against game instance 
## Body: 
|  KEY          |  VALUE                    | DESCRIPTION |
| ------------- | ------------------        | ----        |
| selected      | ex: [                     |User Letter Selection|
|               |   {"row": 0, "column":0}, |             |
|               |   {"row": 1, "column":0}, |             |
|               |   {"row": 0, "column":1}  |             |
|               | ]                         |             |
## Response: 
```
{
    "result": "fab"
}
```
# Testing 
To run tests run ``` jest ``` while running local server 

## Testing Strategy: 
Main strategy is ensuring that the API implementation is working correctly as is working as specified according to requirements specification(later documentation).

Main categories that i would test would be:
1. Happy path or basic positive tests
2. Positive tests with optional parameters(for example user could specify the size of the board and if no specification was provided it should default to 4x4)
3. Negative testing with valid input
4. Invalid input