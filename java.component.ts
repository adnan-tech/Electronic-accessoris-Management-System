import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
@Input() playerCB;
@Input() sportsRadio;
@Output() optSel=new EventEmitter();
mobilearr:any[]=[]
  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.mobilearr=this.authService.mobiles;
    console.log(this.mobilearr)
console.log("In TeamoptionsComponent");
console.log("PlayerCB",this.playerCB);
console.log("sportsRadio",this.sportsRadio);
  }
emitChange(){
  this.optSel.emit();
}
addcart(data){
  console.log(data)
  this.authService.cartfun(data);
  this.router.navigate(['/cart'])
}
}
