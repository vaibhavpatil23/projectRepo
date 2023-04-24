


class MetroRailwayForm {
    constructor() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.fromStation = '';
      this.toStation = '';
      this.date = '';
      this.time = '';
    }
    
    // Methods to set and get form field values
    setName(name) {
      this.name = name;
    }
    
    getName() {
      return this.name;
    }
    
    setEmail(email) {
      this.email = email;
    }
    
    getEmail() {
      return this.email;
    }
    
    // ... Define similar methods for other form fields
  }
  class MetroRailwayForm {
    // ... Code from Step 1
    
    isValid() {
      // Check if all required fields are filled
      if (this.name && this.email && this.phone && this.fromStation && this.toStation && this.date && this.time) {
        return true;
      }
      return false;
    }
  }
  const form = new MetroRailwayForm();

  // Set form field values
  form.setName('John Doe');
  form.setEmail('johndoe@example.com');
  form.setPhone('1234567890');
  form.setFromStation('Central');
  form.setToStation('Airport');
  form.setDate('2023-04-26');
  form.setTime('10:00 AM');
  
  // Get form field values
  const name = form.getName();
  const email = form.getEmail();
  const phone = form.getPhone();
  const fromStation = form.getFromStation();
  const toStation = form.getToStation();
  const date = form.getDate();
  const time = form.getTime();
    
  const nameInput = document.getElementById('name');
nameInput.addEventListener('input', () => {
  form.setName(nameInput.value);
});

// ... Add similar event listeners for other form fields
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  if (form.isValid()) {
    // Submit the form
  } else {
    // Show an error message
  }
});
