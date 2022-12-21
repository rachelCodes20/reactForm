# reactForm

Frontend Take-Home Exercise
Your task is to build a webpage with a user creation form. The form should take the following required inputs:

Full Name
Email
Password
Occupation
State
Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:

{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:

{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.

Minimum Requirements
Your site must:

Display a form with inputs for each field outlined above
Allow a user to complete and submit the form
Do not allow form submission without completing the entire form
Provide feedback upon successful form submission
You may complete this exercise using any languages or frameworks you'd like.