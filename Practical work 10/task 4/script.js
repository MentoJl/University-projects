class Shape {
    static total = 100;

    static fill() {
        this.total = 100;
        console.log('Paint filled to 100%');
    }

    static draw() {
        this.total -= 10;
    }
}

function drawShape() {
    const shapeElement = document.createElement('div');
    
    shapeElement.classList.add('shape');
    const transparency = Shape.total / 100;
    const color = `rgba(255, 0, 255, ${transparency})`;
    shapeElement.style.backgroundColor = color;

    Shape.draw()
    document.querySelector('.shape-container').appendChild(shapeElement);
}

function fillPaint() {
    Shape.fill();
}