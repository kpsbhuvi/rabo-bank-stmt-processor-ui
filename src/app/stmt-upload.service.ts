import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs';
import{  map } from 'rxjs/Operators';
import{  catchError } from 'rxjs/Operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class StmtUploadService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
  }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://localhost:8080/rabocuststmt/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, this.httpOptions).pipe(map((response: any) => { return response; })
        , catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
