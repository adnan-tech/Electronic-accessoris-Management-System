import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Cell } from './Cell';
import {celldb} from './Cell';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
cellsarr:Cell[]=celldb;
temparr:Cell[]=[...celldb]
open1:number=-1;
open2:number=-1;
myvar;
mycell:number=0;
gamecheck:boolean
gamestatus:number=-1;
navlinks:{link:string,active:string,txt:string}[];
constructor(private authService:AuthService){}
ngOnInit(){
  this.authService.cartStatusobs$.subscribe(status=>{
    console.log(status)
    this.updateNavBar();
  })
  this.updateNavBar();
}
updateNavBar(){
  let mobile={link:'/java',active:'active',txt:'Mobile'};
  let laptop={link:'/hello',active:'active',txt:'Laptop'};
 let TV={link:'/bye',active:'active',txt:'TV'};
 let cart={link:'/cart',active:'active',txt:'Cart'};
 if(!this.authService.loginStatus){
   this.navlinks=[mobile,laptop,TV]
 }
 else {
   this.navlinks=[mobile,laptop,TV,cart]

 }


}
resetgame(){
  this.cellsarr=this.temparr
  for(let i=0;i<this.cellsarr.length;i++)
  this.cellsarr[i].open=false;
  this.open1=-1;
  this.open2=-1;
  this.mycell=0
  console.log(this.cellsarr,this.temparr)
}
getcell(index){
this.mycell++;
if(this.mycell%2===0)
this.open2=index;
else
  this.open1=index;
this.cellsarr[index].open=true;
if (this.open1>=0&&this.open2>=0)
this.myvar=setTimeout(() => this.doCellsMatching(), 500);
}
doCellsMatching(){
 console.log(this.mycell,this.open1,this.open2,this.cellsarr)
if(this.cellsarr[this.open1].img===this.cellsarr[this.open2].img){
  this.cellsarr[this.open1]=null;
  this.cellsarr[this.open2]=null;
  this.gamestatus++;
  this.open1=-1;
  this.open2=-1;
  if(this.gamestatus===7)
  this.gamecheck=true
  else
  this.gamecheck=false;
clearTimeout(this.myvar)
//  this.cellsarr[this.open2]=null;
}
else{
  console.log("hey")
  this.cellsarr[this.open1].open=false;
  this.cellsarr[this.open2].open=false;
  this.open1=-1;
  this.open2=-1;
  clearTimeout(this.myvar)
}


}
}
