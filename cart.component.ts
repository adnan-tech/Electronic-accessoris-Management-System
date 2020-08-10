import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartarr:any[]=[];
  constructor(private authService:AuthService) { }

  ngOnInit() {
  this.cartarr=this.authService.cartarr;
  }

}
