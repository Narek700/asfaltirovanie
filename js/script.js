window.onload = function () {

    if (window.innerWidth > 992) {
        var dropdown_menu = document.getElementsByClassName('dropdown-menu');
        var dropdown = document.getElementsByClassName('dropdown');
        var navlink = document.getElementsByClassName('nav-link');

        function removeAll() {
            for (let k = 0; k < dropdown.length; k++) {
                dropdown[k].classList.remove('active');
                dropdown[k].classList.remove('show');
                dropdown_menu[k].classList.remove('active');
                dropdown_menu[k].classList.remove('show');
            }
        }


        for (let k = 0; k < dropdown.length; k++) {
            dropdown[k].addEventListener('mouseover', function () {
                this.classList.add('active');
                this.classList.add('show');
                this.querySelector('.dropdown-menu').classList.add('active');
                this.querySelector('.dropdown-menu').classList.add('show');
            });
        }

        for (let k = 0; k < dropdown_menu.length; k++) {
            dropdown_menu[k].addEventListener('mouseout', function () {
                dropdown_menu[k].classList.remove('active');
                dropdown_menu[k].classList.remove('show');
                this.classList.remove('active');
                this.classList.remove('show')
            });
        }

        for (let k = 0; k < navlink.length; k++) {
            navlink[k].addEventListener('mouseover', function () {
                removeAll()
            })
        }
    }

//carousel section 1

    $(document).ready(function () {
        var owl = $('.owl_1.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                },
                993: {
                    nav: true,
                    dots: false,
                },
                1000: {
                    nav: true,
                }
            }
        });
        setTimeout(function () {
            var activeEls = $('.owl-item.active').eq(1).prevObject[0];
            if (activeEls) {
                var info = activeEls.querySelector('.info');
                info.classList.add('fadeInDown');
                setTimeout(function () {
                    info.classList.remove('fadeInDown');
                }, 1000);
            }

        }, 1);
        owl.on('changed.owl.carousel', function (event) {
            setTimeout(function () {
                var activeEls = $('.owl-item.active').eq(1).prevObject[0];
                var info = activeEls.querySelector('.info');
                info.classList.add('fadeInDown');
                setTimeout(function () {
                    info.classList.remove('fadeInDown');
                }, 1000);
            }, 1);
        });

    });


//menu
    var burger = document.getElementById('burgers');
    var menu = document.getElementById('navbarText');
    $('#burgers').prop('checked', false);
    burger.addEventListener('click', function () {
        var label = this.parentNode.querySelector('label');
        if (!label.classList.contains('active')) {
            label.classList.add('active');
            menu.classList.add('active');
        } else {
            label.classList.remove('active');
            menu.classList.remove('active')
        }
    });

    if ("vibrate" in navigator) {
        burger.addEventListener("click", function () {
            navigator.vibrate(10);
        })
    }


    var cont = document.getElementById('cont');
    cont.addEventListener('click', function () {
        menu.classList.remove('active');
        var label = document.getElementById('burgers').parentNode.querySelector('label');
        label.classList.remove('active');
        $('#burgers').prop('checked', false)
    });

    if (window.innerWidth > 993) {
        window.onscroll = function () {
            if (window.scrollY > 100) {
                document.querySelector('.logo img').style.width = '125px';
                document.querySelector('header').style.backgroundColor = '#444141';
                document.getElementById('toTop').style.display = 'flex'

            } else {
                document.querySelector('.logo img').style.width = 'auto';
                document.querySelector('header').style.backgroundColor = '#44414178';
                document.getElementById('toTop').style.display = 'none'
            }
        }
    } else {
        window.onscroll = function () {
            if (window.scrollY > 100) {
                document.getElementById('toTop').style.display = 'flex'

            } else {
                document.getElementById('toTop').style.display = 'none'
            }
        }
    }

//view port
    if (document.getElementById('section_2')) {

        var waypoint1 = new Waypoint({
            element: document.getElementById('section_2'),
            handler: function (direction) {
                document.getElementById('section_2').classList.add('fadeInRight')
            },
            offset: '80%'
        });
        var waypoint2 = new Waypoint({
            element: document.getElementById('section_3'),
            handler: function (direction) {
                document.getElementById('section_3').classList.add('fadeInLeft')
            },
            offset: '80%'
        });

    }
    var waypoint3 = new Waypoint({
        element: document.getElementById('map'),
        handler: function (direction) {
            document.getElementById('map').classList.add('fadeInLeft')
        },
        offset: '80%'
    });
    var waypoint4 = new Waypoint({
        element: document.getElementById('contacts'),
        handler: function (direction) {
            document.getElementById('contacts').classList.add('fadeInRight')
        },
        offset: '80%'
    });
};
