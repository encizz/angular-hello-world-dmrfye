import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EnvironmentService {

    private environment = {};

    constructor(private http: HttpClient) { }

    getEnvironment() {
        return this.environment;
    }

    setEnvironment(env) {
        // return this.http.get('./assets/env.json')
        //     .toPromise()
        //     .then(data => {
        //         this.environment = data;
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        this.environment={
          test:true
        }
    }
}
