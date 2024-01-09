class SimpleObservable {
    constructor() {
      this.observers = [];
      this.value = 0; // Initial value
    }
  
    // Subscribe to the observable
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    // Unsubscribe from the observable
    unsubscribe(observer) {
      this.observers = this.observers.filter(subscriber => subscriber !== observer);
    }
  
    // Notify all observers about a value change
    notify() {
      this.observers.forEach(observer => observer.update(this.value));
    }

    updateValue(newValue){
      this.value += newValue;
      this.notify();
    }
  }

  // Export the class
export default SimpleObservable;