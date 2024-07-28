$(document).ready(function () {
  video();
  speakers();
  reputation();
});

function video() {
  const videos = [...document.querySelectorAll('.invitation')];
  if (videos.length > 0) {
    for (const item of videos) {
      const button = item.querySelector('.invitation__button');
      const iframe = item.querySelector('.invitation__video iframe');
      button.addEventListener('click', function () {
        item.classList.add('invitation--play');
        setTimeout(() => {
          try {
            iframe.contentWindow.postMessage(JSON.stringify({
              type: 'player:play',
              data: {}
            }), '*')
          } catch {}
        }, 300);
      });
    }
  }
}

function speakers() {
  $('.speakers__wrapper').slick({
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}

function reputation() {
  let slider = $('.reputation__slider');

  slider.slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3.2,
    appendArrows: $('.reputation__arrows'),
    prevArrow: `
      <div class="arrow-left">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>`,
    nextArrow: `
      <div class="arrow-right">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>`,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
}
