import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
	
	baseURL: string = "http://localhost:8080/inventory";

  constructor(private http: HttpClient) { }
  
  
  // Makes a get request to backend to fetch products data
     saveProduct(product: any): Observable<Product> {
		 const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
        return his.http.post(this.baseURL + 'product', body,{'headers':headers})
    }
}
