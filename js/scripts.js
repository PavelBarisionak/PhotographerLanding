// hero-section


let sliderArr =  document.querySelectorAll('.slider-hider');
sliderArr.forEach(function(slider){
    function draw(){    
        this.sliderList = slider.querySelector('.slider-list');
        sliderList.style.transition = '1s ease 0s';        
        this.sliderFirstElem = slider.querySelector('.slider-item');
        this.firstSrc = this.sliderFirstElem.style.backgroundImage;        
        this.newSlide = document.createElement('div');
        this.newSlide.style.backgroundImage=this.firstSrc;
        this.newSlide.classList.add('slider-item');
        this.sliderList.append(this.newSlide);           
        }
    function moveLeft(){
        let sliderFirstElem = slider.querySelector('.slider-item');
        let sliderItemWidth = window.getComputedStyle(sliderFirstElem,null).getPropertyValue("width");
        this.sliderList = slider.querySelector('.slider-list');
        this.sliderList.style.left = "-"+sliderItemWidth;       
        }
    function clearFirstItem(){
        this.sliderList = slider.querySelector('.slider-list');
        this.sliderFirstElem = slider.querySelector('.slider-item');;
        this.sliderList.removeChild(this.sliderFirstElem);
        this.sliderList.style.transition = 'none'; 
        this.sliderList.style.left = 0 + 'px';       
        }         
    autoCarousel();
    function autoCarousel(){               
            setTimeout(() => {
                draw();
                moveLeft();
                setTimeout(
                    clearFirstItem                
                , 1000);
            autoCarousel();               
        }, 5000);                     
    };
})


 

// Progress-bar


let progressbar1 = document.querySelector('.single-progress-item .progress-bar-style1');  

    // line-run  
    let currentcount1=0;
    const width1 = progressbar1.getAttribute('data-progress')+'%'; 
    const dataprogress1 = progressbar1.getAttribute('data-progress');        
    let progress1 = progressbar1.querySelector('.bar-inner');
    let progressTop1 = progress1.getBoundingClientRect().top;   
     window.addEventListener('scroll', function onScroll(){
         if (window.pageYOffset > progressTop1 - window.innerHeight/1.1){
             this.removeEventListener('scroll',onScroll);
             progress1.style.width = width1;
            // time-run
            const time = 1200;
            const step = 1;
            outNum(dataprogress1,'out-1');
            function outNum(endcount, elem) {
                let l = document.querySelector('#' + elem);     
                let t = Math.round(time/(endcount/step));
                let interval = setInterval(() => {
                    currentcount1=currentcount1+step;
                    if (currentcount1 == endcount) {
                        clearInterval(interval);            
                    }
                    l.innerHTML = currentcount1 +"%";
                },t);
            }
         }
     })  
     
let progressbar2 = document.querySelector('.single-progress-item .progress-bar-style2');       
     // line-run  
     let currentcount2=0;
     const width2 = progressbar2.getAttribute('data-progress')+'%'; 
     const dataprogress2 = progressbar2.getAttribute('data-progress');        
     let progress2 = progressbar2.querySelector('.bar-inner');
     let progressTop2 = progress2.getBoundingClientRect().top;   
      window.addEventListener('scroll', function onScroll(){
          if (window.pageYOffset > progressTop2 - window.innerHeight/1.1){
              this.removeEventListener('scroll',onScroll);
              progress2.style.width = width2;
             // time-run
             const time = 1200;
             const step = 1;
             outNum(dataprogress2,'out-2');
             function outNum(endcount, elem) {
                 let l = document.querySelector('#' + elem);     
                 let t = Math.round(time/(endcount/step));
                 let interval = setInterval(() => {
                     currentcount2=currentcount2+step;
                     if (currentcount2 == endcount) {
                         clearInterval(interval);            
                     }
                     l.innerHTML = currentcount2 +"%";
                 },t);
             }
          }
      })        
let progressbar3 = document.querySelector('.single-progress-item .progress-bar-style3');        
      // line-run  
      let currentcount3=0;
      const width3 = progressbar3.getAttribute('data-progress')+'%'; 
      const dataprogress3 = progressbar3.getAttribute('data-progress');        
      let progress3 = progressbar3.querySelector('.bar-inner');
      let progressTop3 = progress3.getBoundingClientRect().top;   
       window.addEventListener('scroll', function onScroll(){
           if (window.pageYOffset > progressTop3 - window.innerHeight/1.1){
               this.removeEventListener('scroll',onScroll);
               progress3.style.width = width3;
              // time-run
              const time = 1200;
              const step = 1;
              outNum(dataprogress3,'out-3');
              function outNum(endcount, elem) {
                  let l = document.querySelector('#' + elem);     
                  let t = Math.round(time/(endcount/step));
                  let interval = setInterval(() => {
                      currentcount3=currentcount3+step;
                      if (currentcount3 == endcount) {
                          clearInterval(interval);            
                      }
                      l.innerHTML = currentcount3 +"%";
                  },t);
              }
           }
       })            



