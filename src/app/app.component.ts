import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imgproject';
  str?:string;
  bike!:string;

  showing(val:string)
  {
    if(this.bike !="")
    {
      val = this.bike;
    }
    
    if(val == "R15")
    {
      this.str="/assets/pictures/r15.jpg";
    }
    else if(val == "RX")
    {
      this.str="/assets/pictures/rx100.jpg";
    }
    else if(val == "RE")
    {
      this.str="/assets/pictures/re.jpg";
    }
    else if(val == "HM")
    {
      this.str="/assets/pictures/himalaya.jpg";
    }
  }
}
