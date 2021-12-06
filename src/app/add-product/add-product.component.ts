import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
	
	
  productFG: any;

  constructor(productService : ProductServiceService) { }

  ngOnInit(): void {
	  
	  productFG = new FormGroup({
						  name: new FormControl('', [Validators.required]),
						  quantity: new FormControl('')						  
						});
  }
  
  onSubmit(): void{
	  productService.saveProduct.subscribe(()=>{})'

  }

}
