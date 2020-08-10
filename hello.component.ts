import { AuthService } from './../auth.service';
import { CourseInfo,coursedb } from './../courseinfo';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) { }
  coursname:string;
  addCourse:string;
  courseinfo:string[]=['Angular','Java Script','React','Bootstrap'];
 course:string;
timing:string;
faculty:string;
message:string;
uname:string='';
pages:string[];
pwd:string='';
laptoparr:any[]=[]
loginFail:boolean=false;
pagenum:number=null;
ngOnInit() {
  this.laptoparr=this.authService.laptop;
  // this.authService.pagefun(1,"Mobile");
  // this.pagenum=this.authService.pagecount;
  // this.pages=this.authService.pagearr;
  // console.log(this.pages)
}
addcart(data){
  console.log(data)
  this.authService.cartfun(data);
  this.router.navigate(['/cart'])
}
  loginuser(){
    if(this.uname===this.pwd){
      this.loginFail=false;
      console.log("logged in users:",this.uname);
this.authService.login(this.uname);
this.router.navigate(['/home']);
    }
    else {
      this.loginFail=true;
    }
    /*
      this.route.paramMap.subscribe(params=>{
      this.coursname=params.get("coursename");
      this.addCourse=params.get("coursename");
      console.log(this.coursname,this.addCourse)

      if(course!=="")
      this.coursname= this.courseinfo.find(n1=>n1.name===course)

 })      */

//     this.route.queryParamMap.subscribe(params=>{
// console.log(params);
// this.extraclass=params.get("extra");
// this.timing=params.get("time");
// this.faculty=params.get("faculty");
// this.message=params.get("message");
//     })
  }
newMsg(){
  this.courseinfo.push(this.course);
//   let path="/hello/"+this.coursname;
//   let myparams={};
//   myparams["message"]="Guest Lecture";
// this.router.navigate([path],{queryParams:myparams,queryParamsHandling:"merge"});

}

}
