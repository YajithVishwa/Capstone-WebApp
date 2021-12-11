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
    var student_ans=document.getElementById("studenttextarea").value;
    var given_ans=document.getElementById("keytextarea").value;
    var mark=document.getElementById("scoretext").value;
    if(student_ans==""||given_ans==""||mark=="")
    {
        return false;
    }
    var data={
        "student_ans":student_ans,
        "given_ans":given_ans,
        "mark":mark
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }
    let fetchRes = fetch(
        "http://dummy.restapiexample.com/api/v1/create", 
                                                options);
                fetchRes.then(res =>
                    res.json()).then(d => {
                        const obj = JSON.parse(d);
                        
                        console.log(d)
                    })


    var parent= document.getElementById("score");
    parent.innerHTML="";
    var child = document.createElement("div");
    child.innerHTML = "<div class='TxtTile'>Similarity</div><div class='pInfo'>25%</div>";
    parent.appendChild(child);
  }
