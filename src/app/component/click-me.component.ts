import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    <input type="text" [(ngModel)] = "nesto">
    {{ nesto }}
        
    `
})

export class ClickMeComponent {
  clickMessage = '';
  nesto = 'Miroslav'
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}

@Component({
  selector: 'loop-back',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { 

  
}


@Component({
  selector: 'key-up4',
  templateUrl:'app/template/click-me.component.html'
})
export class KeyUpComponent_v4 {
    value = '';

    update(valueString: string){ 

      this.value = valueString;
      if(this.value == "Micko"){

        //alert("dsdad")
        this.value = 'Jasna';

      }

    }
    
    
}