let slide = document.querySelectorAll('.slide');
let left = document.querySelector('.arrow.left');
let right = document.querySelector('.arrow.right');
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu2');
let button = document.getElementsByClassName('button');
let current = 0;

right.addEventListener('click', ()=>{
  if(current + 1 === slide.length){
    current = -1;
  }
  showRight();
});

for(var x =0; x < button.length ; x++){
  button[x].addEventListener('click', ()=>{
    menu.classList.toggle('active');
})
}

toggle.addEventListener('click', ()=>{
  menu.classList.toggle('active');
})

function showRight(){
 reset();
 slide[current + 1].style.display = 'block';
 current++;
}
left.addEventListener('click', ()=>{
 if(current === 0){
   current = 3;
 }
 showLeft();
});

function showLeft(){
reset();
slide[current -1].style.display = 'block';
current--;
}
function reset(){
 for(var each of slide){
   each.style.display = 'none';
 }
}
function startSlide(){
 reset();
 slide[0].style.display = 'block';
}

startSlide();
 

 

let width =$(window).width();
 
$(function(){
   
    $(window).scroll(()=>{
      let height = $(this).scrollTop(); 
      if(height > 150){
        $('.wrapnav').addClass('active');
        $('.top1').addClass('deduct');
        $('.float').addClass('moveback');
  
        $('.logo img').attr('src', './images/tools-and-utensils2.png');
      }
      else if(height < 150){
        $('.wrapnav').removeClass('active');
        $('.top1').removeClass('deduct');
        $('.float').removeClass('moveback');
        $('.logo img').attr('src', './images/tools-and-utensils.png');
      }
  
      if((height - $('.bg1').offset().top) + 400 >= 0){
        let adjust = height - ($('.bg1').offset().top);
        let size =   height - ($('.bg1').offset().top) + 300;
        
        $('.quote h1').css({
          'transform': 'translateY('+ Math.max(0, adjust) +'px)'
        })
        
        if(width >= 1024){
           $('.bg1').css({
          'background-size': Math.max(100, Math.min(120, 100 + size/14)) + '%'
          })
        }  
      }
      
      if(height - $('.story').offset().top + 300 >= 0){
        $('.section').each((i)=>{
          setTimeout(()=>{
            $('.section').eq(i).addClass('showing');
          }, 200 * (i+1));
        })
      }


    });   
         
         
   
   

  $('#home').click(()=>{
    $('*').animate({scrollTop: 0}, 1600);

  })
  $('#about').click(()=>{
    $('*').animate({scrollTop: $('.about').offset().top - 80}, 1300)
  })
  $('#facts').click(()=>{
    $('*').animate({scrollTop: $('.facts').offset().top - 80}, 1300)
  })
  
  $('#education').click(()=>{
    $('*').animate({scrollTop: $('.timeline').offset().top - 80}, 1300)
  })
  $('#contact').click(()=>{
    $('*').animate({scrollTop: $('.contact').offset().top - 80}, 1300)
  })

  $('.logo img').click(()=>{
    $('*').animate({scrollTop: 0}, 1600);
  })
  
  $('.explore').click(()=>{
    $('*').animate({scrollTop: $('.about').offset().top - 80}, 1300);
  })
  
  $('#home2').click(()=>{
    $('*').animate({scrollTop: 0}, 2000);
  })
  $('#about2').click(()=>{
    $('*').animate({scrollTop: $('.about').offset().top - 60}, 1600);
  })

  $('#facts2').click(()=>{
    $('*').animate({scrollTop: $('.facts').offset().top - 60}, 1600)
  })
  
  $('#education2').click(()=>{
    $('*').animate({scrollTop: $('.timeline').offset().top - 60}, 1600)
  })
  $('#contact2').click(()=>{
    $('*').animate({scrollTop: $('.contact').offset().top - 60}, 1600)
  })

})

 
 