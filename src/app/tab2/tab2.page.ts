import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor( private renderer: Renderer2) {
    this.renderer.setAttribute(document.body, 'color-theme', 'dark')
  }


  onToggleColorTheme(event){ 
    console.log(event.detail.checked);
    
    
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
    }

  }

}
