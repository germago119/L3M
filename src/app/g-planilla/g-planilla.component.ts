import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Trabajador} from '../Models/trabajador';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-g-planilla',
  templateUrl: './g-planilla.component.html',
  styleUrls: ['./g-planilla.component.css']
})
export class GPlanillaComponent implements OnInit {
  constructor(private dataService:DataService) {
  }

  ngOnInit() {
  }

  trabajadoresList: Array<Trabajador> = [];

  getProductosPorSucursal(){
    this.dataService.getDataPlanilla().subscribe(data=>{
    this.trabajadoresList = data;
    this.DownloadReport1();
    });

  }

  DownloadReport1(){  
    let row : any[] = []
    let rowD : any[] = []
    let col=['Nombre del trabajador', 'Cédula del trabajador','Sucursal del Trabajador', 'Salario del trabajador', 'Horas ordinarias','Horas Extra' ]; // initialization for headers
    let title = "Generación de planilla" // title of report
    for(let a=0;a <this.trabajadoresList.length;a++){
      row.push(this.trabajadoresList[a].nombreCompletoTrabajador)
      row.push(this.trabajadoresList[a].cedulaTrabajador)
      row.push(this.trabajadoresList[a].sucursalTrabajador)
      row.push(this.trabajadoresList[a].salarioHoraTrabajador)
      row.push(this.trabajadoresList[a].horasLaboradasTrabajador)
      row.push(this.trabajadoresList[a].horasExtraTrabajador)
      rowD.push(row);
      row =[];
    }
    this.getReport(col , rowD , title );
  }

getReport(col: any[], rowD: any[], title: any) {
        const totalPagesExp = "{total_pages_count_string}";        
        let pdf = new jsPDF('l', 'pt', 'legal');
        pdf.setTextColor(51, 156, 255);
        pdf.text("L3M Report", 450, 40);
        pdf.text("Email: l3m@gmail.com", 450, 60); // 450 here is x-axis and 80 is y-axis
        pdf.text("Phone:123456789", 450, 80); // 450 here is x-axis and 80 is y-axis
        pdf.text("" + title, 435,100);  //
        pdf.setLineWidth(1.5);
        pdf.line(5, 107, 995, 107)
        var pageContent = function (data) {
            // HEADER
           
            // FOOTER
            var str = "Page " + data.pageCount;
            // Total page number plugin only available in jspdf v1.0+
            if (typeof pdf.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            pdf.setFontSize(10);
            var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
            pdf.text(str, data.settings.margin.left, pageHeight - 10); // showing current page number
        };
        pdf.autoTable(col, rowD,
            {
                addPageContent: pageContent,
                margin: { top: 110 },
            });

        //for adding total number of pages // i.e 10 etc
        if (typeof pdf.putTotalPages === 'function') {
            pdf.putTotalPages(totalPagesExp);
        }

        pdf.save(title + '.pdf');
}

}
