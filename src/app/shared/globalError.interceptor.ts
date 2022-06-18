// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';
// import { TranslateService } from '@ngx-translate/core';
// import { AuthService } from '../../auth/services/auth.service';
// import { Router } from "@angular/router";

// @Injectable()
// export class GlobalHttpInterceptorService implements HttpInterceptor {
//   constructor(
//     private toastr: ToastrService,
//     private translate: TranslateService,
//     private authService: AuthService,
//     private router: Router
//   ) {
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler):
//     Observable<HttpEvent<any>> {

//     return next.handle(req).pipe(
//       retry(1),
//       catchError((error) => {
//         let errorMessage = '';
//         console.log('In error ** ' + error.status);
//         if (error.status == 0) {
//           this.router.navigate(['errorPage']);
//         }
//         if (error.status === 404 && req.url.search(/login/gi) !== -1) {
//         } else if (error.status !== 401) {
//           if (error.error instanceof ErrorEvent) {
//             // client-side error
//             errorMessage = `${this.translate.instant('COMMON.ERROR')}: ${error.error.message}`;
//           } else {
//             // server-side error
//             errorMessage = this.translate.instant('COMMON.ERROR_CODE') + `: ${error.status}\n
//             ${this.translate.instant('COMMON.MESSAGE')}: ${error.message}`;
//           }
//           if (error.status !== 404) {
//             // this.toastr.error(errorMessage, this.translate.instant('COMMON.ERROR'));
//             if (error.status === 500)
//               this.router.navigate(['/pages/error-500']);
//           }
//         } else if (error.status === 401) {
//           this.authService.logout();
//         }
//         return throwError(error);
//       })
//     );
//   }
// }
