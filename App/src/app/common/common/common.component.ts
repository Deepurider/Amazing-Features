import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  public items: any[] = []
  ngOnInit() { 
    this.items = [
      { label: 'View'},
      { label: 'Delete' }
  ];
  }

  public onChange(event: any) {
    console.log(event);
  }
}
