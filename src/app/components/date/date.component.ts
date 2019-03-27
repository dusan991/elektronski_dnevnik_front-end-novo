import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { OcenaService } from '../../services/ocena.service';
import { OcenaDTO } from '../../models/OcenaDTO';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{
  
  selected:{startDate:moment.Moment; endDate:moment.Moment}={startDate:null, endDate:null};
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];
  
  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }
  
  constructor(private ocenaService: OcenaService) {
        this.alwaysShowCalendars = true;
  }

ngOnInit() {
  console.log(this.ranges);
}

datumPrviString:string;
datumDrugiString:string;
ocene:OcenaDTO;
oceneNiz:OcenaDTO[];
prikazOcena:boolean=false;
prikazOcenaNiz:boolean=false;

choosedDate(event){
console.log('event',event);
if(this.selected.startDate!=null && this.selected.endDate!=null){
this.datumPrviString=this.selected.startDate.format('YYYY-MM-DD');
this.datumDrugiString=this.selected.endDate.format('YYYY-MM-DD');
console.log('selected',this.selected.startDate);
console.log('string',this.datumPrviString);
this.prikazOcena=false;
this.prikazOcenaNiz=false;
if(this.datumPrviString==this.datumDrugiString){
this.ocenaService.searchOceneDatum(this.datumPrviString).subscribe
    ((data) => {this.ocene=data;
      this.prikazOcena=true;
    console.log(this.ocene);})
    }
    else{this.ocenaService.searchOceneDatumi(this.datumPrviString,this.datumDrugiString).subscribe
      ((data) => {this.oceneNiz=data;
        this.prikazOcenaNiz=true;
      console.log(this.oceneNiz);})}
}
}
}
