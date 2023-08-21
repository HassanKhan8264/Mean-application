import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full-stack-app';
  items: any[] = []

  ngOnInit(){
    for (let i = 1; i <= 1000; i++) {
      this.items.push(`Item ${i}`);
      console.log('item',this.items);

    }
  }
}
