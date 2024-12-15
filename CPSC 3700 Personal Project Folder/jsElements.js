//about page add script here.

var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    //loops to navigate contents of tab.
    function opentab(tabName) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }

        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
    }