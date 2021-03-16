class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("my quiz Game");
      title.position(130, 0);
  
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestants+=1;
        contestants.index = contestants;
        contestant.update();
        contestants.updateCount(contestants);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(130, 100);
      });
  
    }
  }