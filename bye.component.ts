import { AuthService } from './../auth.service';
import { coursedb, CourseInfo } from './../courseinfo';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit {
studentlist:string;
addstudent:string;
studentarr:CourseInfo[]=coursedb;
name:string;
coursename:string=""
email:string=""
facultyinp:string=""
pagenum:number=null;
pages:string[];
tvarr:any[]=[];
  constructor(private authService:AuthService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.tvarr=this.authService.TV;
    //this.authService.logout();
    //this.router.navigate(['/home'])
// this.authService.pagefun(1,"TV");
// this.pagenum=this.authService.pagecount;
// this.pages=this.authService.pagearr;
console.log(this.pages)
    this.route.paramMap.subscribe(params=>{
  this.studentlist=params.get("studentname")
  this.addstudent=params.get("studentname")
  console.log(this.studentlist,this.addstudent)
})
  }
  addcart(data){
console.log(data)
this.authService.cartfun(data);
this.router.navigate(['/cart'])
  }
newcreate(){
  this.studentarr.push({name:this.name,email:this.email,course:this.coursename})
//   let path="/hello/"+this.coursename;
//   let myparam={};
// myparam["extra"]="there is an Extra Class";
// myparam["time"]=this.timeinp;
// myparam["faculty"]=this.facultyinp;
// this.router.navigate([path],{queryParams:myparam});
}
}
