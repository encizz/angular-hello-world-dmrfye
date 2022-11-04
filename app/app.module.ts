import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EnvironmentService } from './config.service';
import { HttpClientModule } from '@angular/common/http';

export const appInitializerFn = (env: EnvironmentService) => {
	return () => {
		console.log('inside appinitfn');
//call profiles abn send enc to 

		return env.setEnvironment('dev');
	};
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
		EnvironmentService,
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializerFn,
			multi: true,
			deps: [EnvironmentService]
		}
	]
})
export class AppModule { }
