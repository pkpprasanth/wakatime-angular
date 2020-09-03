
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import{Wakatime} from "../wakatime";
import{WakatimeService} from "../wakatime.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  dataSource : any[];
  constructor(private wakatimeService :WakatimeService) { }

  selectedSquad :number = 0;
  selected :any[]=[];
  selectedname :string;
  ngOnInit(): void {

    this.reloadDate();
  }
  reloadDate(){
    this.wakatimeService.getuserList().subscribe((res)=>{
      this.dataSource=res as any[];
    });
   
  }

  squadnumber(sq: number){
    console.log(sq);
    this.selectedSquad=sq;
    this.selected.length = 0;
    for(let i=0;i<this.dataSource.length;i++)
      {
        if(this.selectedSquad==this.dataSource[i].squad)
        {
              console.log(this.dataSource[i])
              this.selected.push(this.dataSource[i])
        }
      }

  }


  squadname(name: string){
    console.log(name);
    this.selectedname=name;
  }
  getreport()
 {
   console.log("GetReport");
 }
}

