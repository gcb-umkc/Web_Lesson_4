function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    const ROOT = "https://api.github.com/";
    let URL =  ROOT + "users/" + user;
    let request = new XMLHttpRequest();
    request.open("GET", URL, false);
    request.send();
    return request;
}

function showUser(user) {
    //Creates a new user struct to store relevant request information
    if (user["name"] == null){
        this.name = user["login"];
    }
    else{
        this.name = user["name"];
    }
    avatar = user["avatar_url"];
    id = user["id"];
    link = String(user["html_url"]);

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $('#id').text('ID:' + id);
    $('#name').text(name);
    $('#avatar').attr("src", avatar);
    $('#avatar').show();
    $('#html_url').text("Link");
    $('#html_url').attr("href", link);
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
}

$(document).ready(function () {
    $('#avatar').hide();
    $(document).on('keypress', '#username', function (e) {
        //check if enter (i.e return) key is pressed
        let response;
        if (e.which == 13) {
            //get what the user enters
            let username = $(this).val();
            console.log(username)
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the response
            let response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                console.log(response.status);
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
