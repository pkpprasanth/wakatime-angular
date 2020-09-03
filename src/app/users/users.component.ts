import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import{Wakatime} from "../wakatime";
import{WakatimeService} from "../wakatime.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  // dataSource: Wakatime[];

wakatime : Observable<Wakatime[]>;
  displayedColumns: string[] = ['uid', 'name', 'squad'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private wakatimeService :WakatimeService) { }

  ngOnInit(): void {
    
    //this.reloadDate();
    
  }

  ngAfterViewInit() : void{
    this.wakatimeService.getuserList().subscribe((res)=>{
      this.dataSource=new MatTableDataSource(res);
      console.log(this.sort);
      this.dataSource.sort = this.sort;
    });

  }

  

}
