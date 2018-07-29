import options from './models/navigation.js';
import team from './models/team-work.js';
import Team from './render/team.js';

$(document).ready(function () {

    new WOW().init();
    //efecto smooth para los enlaces
    $("#services div.row h4.service-heading a").click(function (event) {
        event.preventDefault()
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 600);
    })
    $("section#about").focusin(function(event) {
        console.log('algo');
    });

    $("#btn_add_action").click(function (event) {
        $("#chat-room").fadeToggle(300)
    })

    var chat = $("#chat-body");
    var message = $("#inp-chat-container")
    $("#btn-chat-send").click(function (event) {
        if (!(message.val().length >= 1))
            return

        let span = document.createElement('div')
        let body = document.createElement('div')
        let name = document.createElement('h6')
        let msg = document.createElement('p')
        let time  = document.createElement('small')
        
        name.setAttribute('class', 'card-title text-sm-left')
        span.setAttribute('class', 'card')
        body.setAttribute('class', 'card-body')
        msg.setAttribute('class', 'card-text')
        time.setAttribute('class','chat-time')

        let date = new Date()

        msg.appendChild(document.createTextNode(message.val()))
        name.appendChild(document.createTextNode("You"))
        time.appendChild(document.createTextNode(`Sent at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`))
        body.appendChild(name)
        body.appendChild(msg)
        body.appendChild(time)
        span.appendChild(body)
        chat.append(span)
        span.scrollIntoView()
        message.val("")
    })


    render_team();
    $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;
    
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $(".carousel-item")
                .eq(i)
                .appendTo(".carousel-inner");
            } else {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            }
          }
        }
      });
});

function render_team(){
    let container = $("#team-container");
    let fragment = document.createDocumentFragment()
    for (let o of team){
        fragment.appendChild(new Team(o).build_element())
    }
    let aux_class = fragment.firstChild.getAttribute('class')
    fragment.firstChild.setAttribute('class', `${aux_class} active`)
    container.append(fragment)

    
}

