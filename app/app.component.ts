import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from './config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [EnvironmentService]
})
export class AppComponent implements OnInit  {
  name = 'Angular 4';

constructor(private env: EnvironmentService){

}

ngOnInit() {

  let a = this.env.getEnvironment();

  console.log(a);
}


}
