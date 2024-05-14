import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactUsPayload } from '../interfaces/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
 baseUrl: string  = 'http://upskilling-egypt.com:3001/contact'
  constructor(private httpClient: HttpClient) {}
  postContactUs(contactUsPayload :ContactUsPayload) :Observable<any> {
    return this.httpClient.post(this.baseUrl, contactUsPayload)
  }
}
