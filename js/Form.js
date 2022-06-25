class Form {
  constructor() {
    this.title = createImg("assets/title.png");
    this.input = createInput("");
    this.button = createButton("Play");
    this.greeting = createElement("h3");
    
  }
  setElementPos() {
    this.title.position(120,80);
    this.input.position(width/2-100,height/2-80);
    this.button.position(width/2-100,height/2-20);
    this.greeting.position(width/2-120,height/2-50);
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  handleMousePressed() {
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      var message = `Hello ${this.input.value()} Please wait for other players to join...`
      this.greeting.html(message);
    })
  
    
  }
  display() {
    this.setElementPos();
    this.handleMousePressed();
  
  }
}
