class Slider {
    constructor(selector, orientation = 'horizontal') {
        this.slider = document.querySelector(selector);
        this.slidesContainer = this.slider.querySelector('.slides');
        this.slides = [];
        this.currentIndex = 0;
        this.orientation = orientation;

        this.initStyles();
    }

    initStyles() {
        this.slider.style.overflow = 'hidden';
        this.slidesContainer.style.display = 'flex';
        this.slidesContainer.style.transition = 'transform 0.5s ease-in-out';

        if (this.orientation === 'vertical') {
            this.slider.style.height = '200px';
            this.slidesContainer.style.flexDirection = 'column';
        } else {
            this.slider.style.width = '200px';
            this.slidesContainer.style.flexDirection = 'row';
        }
    }

    addSlide(content) {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.innerHTML = content;
        this.slides.push(slide);
        this.slidesContainer.appendChild(slide);
        this.updateSlidePosition();
    }

    moveNext() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
            this.updateSlidePosition();
        }
    }

    movePrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlidePosition();
        }
    }

    updateSlidePosition() {
        const moveAmount = -this.currentIndex * 200;
        this.slidesContainer.style.transform =
            this.orientation === 'vertical' ? `translateY(${moveAmount}px)` : `translateX(${moveAmount}px)`;
    }
}

const mySlider = new Slider('#mySlider', 'horizontal');

mySlider.addSlide('<img src="1.jpg">');
mySlider.addSlide('<img src="2.jpg">');
mySlider.addSlide('<img src="3.jpg">');
mySlider.addSlide('<img src="4.jpg">');
mySlider.addSlide('<img src="5.jpg">');
mySlider.addSlide('<img src="6.jpg">');