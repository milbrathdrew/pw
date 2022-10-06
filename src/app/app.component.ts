import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  //property is empty on first instance of this class
  password = '';
  
  
  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  //when the method is called
  //update the value to the opposite of current value
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  //when onButtonClick method is called, update value of password
  onButtonClick(){
    //list all possible values
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+'

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters; 
    }

    if (this.includeNumbers){
      validChars += numbers;
    }

    if (this.includeNumbers){
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    //this log will display the value of includeLetters
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);

    console.log(`
    About to generate a password with the following:
    Includes Letters: ${this.includeLetters}
    Includes Numbers: ${this.includeNumbers}
    Includes Symbols: ${this.includeSymbols}
    `)
    this.password = generatedPassword;
  }



}
