/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app;
(function (app) {
    "use strict"

    // About Button Click event handler





    function ContactContent() {
        // does nothing right now
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        try {
            

            switch (title) {
                case "COMP125 - Home":
                    //HomeContent();

                    content.HomeContent();
                    break;

                case "COMP125 - About":
                    content.AboutContent();
                    break;

                case "COMP125 - Contact":
                    content.ContactContent();
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        }
        catch {
            console.warn("Something went wrong when switching pages");
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);


    // these are all app properties
    app.Title = document.title;


})(app || (app = {}));