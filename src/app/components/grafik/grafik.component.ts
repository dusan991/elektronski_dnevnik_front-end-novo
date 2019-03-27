import { Component, OnInit, Input } from '@angular/core';

import { OcenaDTO } from '../../models/OcenaDTO';

@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
  styleUrls: ['./grafik.component.css']
})
export class GrafikComponent implements OnInit {

  @Input()
  ocene:OcenaDTO;

  @Input()
  oceneNiz:OcenaDTO[];

  datum:Date[]=[];
  ocenaBroj:number[]=[];
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  
  public colors = [
    {
      backgroundColor: 'rgba(115,1,224,0.2)',
      borderColor: 'rgba(115,1,96,1)',
      pointBackgroundColor: 'rgba(77,1,224,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(115,1,224,1)'
    }
    ];

  public barChartLabels =this.datum;
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: this.ocenaBroj, label: 'Broj datih ocena'}
  ];

  constructor() { }

  ngOnInit() {
    if(this.ocene!=null){
      this.datum.push(this.ocene.datumOcene);
      this.ocenaBroj.push(this.ocene.dateOcene);
    }
    if(this.oceneNiz!=null){
      for(let i=0;i<this.oceneNiz.length;i++){
      this.datum.push(this.oceneNiz[i].datumOcene);
      this.ocenaBroj.push(this.oceneNiz[i].dateOcene);
      }
    }

    console.log(this.ocene);
    console.log(this.oceneNiz);
    console.log(this.datum);
    console.log(this.ocenaBroj);
  }

}
