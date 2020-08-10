import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginStatus:boolean=false;
username:string=null;
pagecount:number=0;
pagearr:string[]=[]
 cartStatusobs=new Subject<Boolean>();
 cartStatusobs$=this.cartStatusobs.asObservable();
mobiles:any[]=[{brand:'Xiaomi',model:'Redmi 5',price:7999},
{brand:'Samsung',model:'On6 pro',price:10999},
{brand:'Oppo',model:'F 16S',price:12499},
{brand:'Vivo',model:'V 20X',price:8999},
{brand:'Motorola',model:'G 5S',price:10999}]

laptop:any[]=[{brand:'Acer',model:'M205',price:25000},
{brand:'Dell',model:'Vostro6',price:31000},
{brand:'Lenovo',model:'Yoga 40',price:27500},
{brand:'HP',model:'H620',price:29000}];

TV:any[]=[{brand:'LG',model:'FX204',price:32000},
{brand:'Samsung',model:'SM148',price:36000},
{brand:'Sony',model:'K4555X',price:42000},
{brand:'Xiaomi',model:'Mi208Y',price:24000},
{brand:'Panasonic',model:'PN110',price:41000}]

cartarr:any[]=[]
constructor() { }
pagefun(x:number,pagename:string){
  this.pagecount+=x;
  this.pagearr.push(pagename)
}
  login(name:string){
  this.loginStatus=true;
  this.username=name;
}
logout(){
  this.loginStatus=false;
  this.username=null;
}
cartfun(data){
  this.loginStatus=true;
  let x=this.cartarr.findIndex(n1=>n1.model===data.model)
  if(x<0){
this.cartarr.push({brand:data.brand,model:data.model,price:data.price,quantity:1})
  }
  else{
this.cartarr[x].quantity=this.cartarr[x].quantity+1
  }
this.cartStatusobs.next(this.loginStatus)
  console.log("hii",this.cartarr)
}
}
