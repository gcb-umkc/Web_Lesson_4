function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    const ROOT = "https://api.github.com/";
    let URL =  ROOT + "users/" + user;
    let request = new XMLHttpRequest();
    request.open("GET", URL);
    request.send();
    return request;
}

//Struct for storing the user info.
function userInfo(user) {
    if (user["name"] == null){
        this.name = user["login"];
    }
    else{
        this.name = user["name"];
    }

    this.avatar = user["avatar_url"];
    this.ID = user["id"];
    this.URL = user["html_url"];
    return this;
}

function showUser(user) {
    //Creates a new user struct to store relevant request information
    let newUser = userInfo(user);

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content




}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if enter (i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            let username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the response
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
