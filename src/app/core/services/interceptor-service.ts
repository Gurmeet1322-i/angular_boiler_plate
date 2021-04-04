
import { Injectable } from '@angular/core';
import { HttpRequest, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr"
import { SpinnerService } from './../../common/spinner/spinner-service';
import { AUTH_APIS, AUTH_PATH } from 'src/app/constants';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(
        private router: Router,
        private toastr: ToastrService,
        private spinner: SpinnerService

    ) {

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.spinner.showSpinner()

        // Clone the request to add the new header.
        const token = localStorage.getItem("accessToken");
        if (token) {
            req = req.clone({
                headers: req.headers.set("authorization", token)
            });
        }
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (

                    event.url.includes(AUTH_APIS.LOGIN)
                ) {
                    const message = event.body.msg;
                    console.log(event.body);
                    this.toastr.success('success');
                }
                this.spinner.hideSpinner()
            }
        },
            async (err: any) => {
                const status = err.error.statusCode;
                const message = err.error.message;
                this.spinner.hideSpinner()
                if (status === 401) {
                    localStorage.clear();
                    this.toastr.error(message);
                    alert('success')
                    this.router.navigateByUrl(`/${AUTH_PATH.SIGN_IN}`)
                } else {
                    this.toastr.error(message)
                }
            }));
    }
}