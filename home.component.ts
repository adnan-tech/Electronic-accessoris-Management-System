import { AuthService } from './../auth.service';
import { Resume, resumedb } from './../Resume';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
playerArray=["BTech","MTech","BCA","MCA","BSc"];
sportArray=["Studying","Working","Searching","Preparing"];
team="Angular";
resumearr:Resume[]=resumedb;
temparr:Resume[]=[...this.resumearr];
page="";
players="";
sport="";
playersStructure=null;
sportStructure=null;
playerSelected="";
currpage=1;
maxpage=5;
status:boolean=false;
username:string="test user"
pagenum:number=null;
pages:string[];
constructor(private authService:AuthService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
this.status=this.authService.loginStatus;
this.username=this.authService.username;
// this.authService.pagefun(1,"Home");
// this.pagenum=this.authService.pagecount;
// this.pages=this.authService.pagearr
//     this.route.paramMap.subscribe(params=>{
//       console.log(params,this.team)
//       this.team=params.get("team");
//       console.log(this.team);
//       if(this.team){
//       this.resumearr=resumedb.filter(n1=>n1.tech===this.team)
//     this.temparr=[...this.resumearr]
//       }
//     console.log("for technology",this.temparr);
//     console.log("for technology",this.resumearr);
//     });
//     this.route.queryParamMap.subscribe(params=>{
//       this.page=params.get("page");
//       this.players=params.get("players");
//       this.sport=params.get("sport");
//     this.makeStructure();

//     });
//   }
// makeStructure(){
//    this.currpage=this.page?+this.page:1;
//    this.playerSelected=this.players?this.players : "";
//    this.playersStructure=this.playerArray.map(pl1=>({
//      name:pl1,
//      selected:false
//    }))
//    let temp=this.playerSelected.split(",");
//    for(let i=0;i<temp.length;i++){
//      let item=this.playersStructure.find(p1=>p1.name===temp[i]);
//  if(item) item.selected=true;
//     }
//     this.sportStructure={
//       sports:this.sportArray,
//       selected:this.sport?this.sport:""
//     };
//     console.log(this.playersStructure);
//     console.log(this.sportStructure);
// }
// optchange(){
//   let temp1= this.playersStructure.filter(n1=>n1.selected);
//   let temp2=temp1.map(p1=>p1.name);
//   console.log("for course",this.temparr)
//   if(this.temparr.length>0&&temp2.length>0){
//   this.resumearr=this.temparr.filter(n1=>{
//     for(let i=0; i<this.temparr.length;i++)
// return n1.course===temp2[i]
//   })
//   this.temparr=[...this.resumearr]
//   }
//   console.log("for course",this.temparr,this.resumearr)
//   this.playerSelected=temp2.join(",");
//   let path ="/home/"+this.team;
//   let qparams={};
//   if(this.playerSelected)
//   qparams["players"]=this.playerSelected;
//   if(this.sportStructure.selected){
//     qparams["sport"]=this.sportStructure.selected;
//   this.resumearr=this.temparr.filter(n1=>n1.status===this.sportStructure.selected)
// console.log("for status",this.resumearr,this.temparr)
// }
// this.router.navigate([path],{queryParams:qparams});
// }
// gotopage(x){
//   this.currpage=this.currpage+x;
//   let path="/home/"+this.team
// this.router.navigate([path],{
//   queryParams:{
//     page:this.currpage
// },
// queryParamsHandling:"merge"
// });
// }
}
}
