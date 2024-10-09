import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrl: './app.component.scss' 
 /* template: `
 <h3>Hello World From Inline</h3>
 <p style="background-color: red; color:white; padding:10px">Thank You</p>`,
 */
})
export class AppComponent {
  title = 'My First Angular App';
}
