var json = {
        "slider":[{
            "img"    : "images/image-tanya.jpg",
            "profile"  : "UX Engineer",
            "name" : "Tanya Sinclair",
            "desc" : "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
        },
        {
            "img"    : "images/image-john.jpg",
            "profile"  : "Junior Front End Developer",
            "name" : "John Tarkpor",
            "desc" : "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer "
        },
        {
            "img": "images/image-tanya.jpg",
            "profile": "UX Engineer",
            "name": "Tanya Sinclair",
            "desc": "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
        }
    ]};
        var mhtml = '';
      $.each(json.slider, function(key, val){
          mhtml += '<div class="slider"> <div class="slider-content"><div class="slider-desc"><p>"'+val.desc+'"</p><p class="auther-name">'+val.name+'<span> '+val.profile+'</span></p></div></div>';
          mhtml += '<div class="slider-image"><img src='+val.img+' alt="" /></div></div>';
      });
      $('.slider-container').append($(mhtml));
      var slides = $('.slider');
      slides.first().after(slides.last());
      $('button').on('click', function() {
        slides = $('.slider');
        var button = $(this);
        if (button.attr('id') == 'next') {
          slides.last().after(slides.first());
        }
        if (button.attr('id') == 'prev') {
          slides.first().before(slides.last());
        }
      });