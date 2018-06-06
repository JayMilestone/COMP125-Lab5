(function (content)
{
    function ContactContent()
    {
        console.log("Contact Content Accessed....");
        //document.getElementsByClassName("card-title")[0].textContent = "Contact You";
        
        //Created button
        let cancelButton = document.createElement("button");
        //Set attributes of buttons
        cancelButton.setAttribute("class", "btn btn-danger");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function(event)
        {
            //prevents submit behaviour originally made and changes it
            event.preventDefault();
            window.open("index.html", "_parent");
        });
        // Adds to end of button created
        document.forms[0].appendChild(cancelButton);

        document.title = "Contact";

        history.pushState("", document.title, "/contact");

        // use the location object to output my pathname
        console.log(location.pathname);
        //show your host
        console.log(location.host);
        
        //show your host name - domain name
        console.log(location.hostname);
    }
    content.ContactContent = ContactContent;
})(content || (content = {}));