import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    
    console.log(request.url);

    const authToken = "My Auth Token";
    const authRequest = request.clone({ 
      setHeaders: { Authorization : authToken} 
    });

    return next.handle(authRequest); 
    
  }
}