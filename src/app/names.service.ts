import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient, private auth: AuthService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.auth.accessToken}`
    })
  };

  getPrivate():Observable<string>{
    return this.http.get<string>("https://securitymc.azurewebsites.net/api/values/private", this.httpOptions);
  }

  getScoped():Observable<string>{
    return this.http.get<string>("http://securitymc.azurewebsites.net/api/values/private-scoped", this.httpOptions);
  }
}
