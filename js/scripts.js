/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function validate() {
    var student_ans = document.getElementById("studenttextarea").value;
    var given_ans = document.getElementById("keytextarea").value;
    var mark = document.getElementById("scoretext").value;
    var method = document.getElementById("method").value;
    if (student_ans == "" || given_ans == "" || mark == "") {
        return false;
    }
    var data = {
        "student_ans": student_ans,
        "given_ans": given_ans,
        "mark": mark,
        "method": method
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'mode': 'no-cors'
        },
        body: JSON.stringify(data)
    }

    if(method=="word2vec"){
    let fetchRes = fetch(
        "http://127.0.0.1:4458/grades/word2vec",
        options);
    fetchRes.then(res => res.json()).
        then(d => {
            console.log(d);
            parent = document.getElementById("score");
            parent.innerHTML = "";
            var child = document.createElement("div");
            child.innerHTML = "<div class='TxtTile'>Similarity</div><div class='pInfo'>"+d.grade+"</div>";
            parent.appendChild(child);
        });
    }
    else{
        let fetchRes = fetch(
            "http://127.0.0.1:4458/grades/doc2vec",
            options);
        fetchRes.then(res => res.json()).
            then(d => {
                console.log(d);
                parent = document.getElementById("score");
                parent.innerHTML = "";
                var child = document.createElement("div");
                child.innerHTML = "<div class='TxtTile'>Similarity</div><div class='pInfo'>"+d.grade+"</div>";
                parent.appendChild(child);
            });
    }
}
