
# Letters Game
API server/application built on Nodejs. 

# Requirements
    Node (8.11.1)
    NPM (5.8.0)
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
- PATCH /api/games/[id]

------------------

## POST /api/dictionaries

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
    "dimentions": 4,
    "dictionary": "5dd82016763a1e7caa1f0daf",
    "__v": 0
}
```

----
## PATCH /api/games/[id]
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
    "dimentions": 4,
    "dictionary": "5dd82016763a1e7caa1f0daf",
    "__v": 0
}
```
