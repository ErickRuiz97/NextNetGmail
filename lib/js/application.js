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



    $("#offers div.card a.card-link").click(function (event) {
        event.preventDefault();
        swal({
            type: 'question',
            title: 'Are you sure to buy this?',
            timer: 10000,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Yes, i\'m sure',
            cancelButtonText: '<i class="fas fa-times-circle"></i> No, i don\'t '
        }).then(function (result) {
            if (result.value){
                swal({
                    type: 'error',
                    text: 'Esta funcionalidad aun esta en desarrollo',
                    title:'Oppssss...',
                    timer: 3000
                })
            }
        })
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



      (function () {
        var Message;
        Message = function (arg) {
            this.text = arg.text, this.message_side = arg.message_side;
            this.draw = function (_this) {
                return function () {
                    var $message;
                    $message = $($('.message_template').clone().html());
                    $message.addClass(_this.message_side).find('.text').html(_this.text);
                    $('.messages').append($message);
                    return setTimeout(function () {
                        return $message.addClass('appeared');
                    }, 0);
                };
            }(this);
            return this;
        };
        $(function () {
            var getMessageText, message_side, sendMessage;
            message_side = 'right';
            getMessageText = function () {
                var $message_input;
                $message_input = $('.message_input');
                return $message_input.val();
            };
            sendMessage = function (text) {
                var $messages, message;
                if (text.trim() === '') {
                    return;
                }
                $('.message_input').val('');
                $messages = $('.messages');
                message_side = message_side === 'left' ? 'right' : 'left';
                message = new Message({
                    text: text,
                    message_side: 'right'
                });
                message.draw();
                return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
            };
            $('.send_message').click(function (e) {
                return sendMessage(getMessageText());
            });

            $('.message_input').keyup(function (e) {
                if (e.which === 13) {
                    return sendMessage(getMessageText());
                }
            });
        });
    }.call(this));
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

