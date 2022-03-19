import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Tarif } from 'src/app/Models/Tarif';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { AjoutTarifComponent } from '../ajout-tarif/ajout-tarif.component';

@Component({
  selector: 'app-table-tarif',
  templateUrl: './table-tarif.component.html',
  styleUrls: ['./table-tarif.component.scss']
})
export class TableTarifComponent implements OnInit {

  
  //ELEMENT_DATA: Tarif[];
  ELEMENT_DATA: Tarif[] = [
    { date_debut: '1', date_fin: 'AAAAAA', fournisseur: '1.0079', article: 'zaaaH', montant: '252222' },
   

  ];
  displayedColumns: string[] = ['date_debut', 'date_fin', 'fournisseur', 'article', 'montant',  'actions'];
  dataSource = new MatTableDataSource<Tarif>(this.ELEMENT_DATA);


  constructor(private dialog: MatDialog, private notificationService: NotificationService, private dialogService: DialogService, private changeDetectorRefs: ChangeDetectorRef) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  searchKey: string;


  ngOnInit() {
    console.log(this.dataSource.data);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }



  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  AjoutTarif() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(AjoutTarifComponent, dialogConfig)
      .afterClosed().subscribe(
        res => {
          console.log(res);
        }
      )

  }

}
