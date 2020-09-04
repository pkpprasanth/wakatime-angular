
import {Component, OnInit} from '@angular/core';
import{WakatimeService} from "../wakatime.service";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers :[WakatimeService]
})
export class ReportComponent implements OnInit {

  constructor(private wakatimeService :WakatimeService) { }
  //store all values form db
  userList : any[];
  selectedSquad :number = 0;
  totalSquad : any;
  selected : any[] = [];

  ngOnInit(): void {
    this.loadData();     
  }

  loadData(){
    let tempSquad : any[]=[];
    this.wakatimeService.getuserList().subscribe((res)=>{
      this.userList=res as any[];
      this.userList.forEach((data) => {
        tempSquad.push(data.squad);
      });
      this.totalSquad = new Set(this.reverse(tempSquad));
    });
  }

  getSquad(id :number) : any{
    console.log(id)
  }
  reverse(temp : any) : any{
    temp.sort(); 
    temp.reverse();
    return temp;
  }
}