// Example Observer class
class StarObserver {
    constructor(name, elementId, value) {
      this.name = name;
      this.elementId = elementId;
    }
  
    // Update method called when notified
    update(newValue) {
      console.log(`${this.name} received updated value: ${newValue}`);
      // Update the value on the screen
      document.getElementById(this.elementId).innerText = newValue;
    }
  }

  export default StarObserver;