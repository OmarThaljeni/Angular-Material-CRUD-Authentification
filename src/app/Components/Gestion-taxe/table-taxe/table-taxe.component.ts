import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { Taxe } from 'src/app/Models/Taxe';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { AjoutTaxeComponent } from '../ajout-taxe/ajout-taxe.component';

@Component({
  selector: 'app-table-taxe',
  templateUrl: './table-taxe.component.html',
  styleUrls: ['./table-taxe.component.scss']
})
export class TableTaxeComponent implements OnInit {
   //ELEMENT_DATA: Taxe[];
   ELEMENT_DATA: Taxe[] = [
    { taux: '1' },
    

  ];
  displayedColumns: string[] = ['taux', 'actions'];
  dataSource = new MatTableDataSource<Taxe>(this.ELEMENT_DATA);
  searchKey: string;

  constructor(private dialog: MatDialog, private notificationService: NotificationService, private dialogService: DialogService, private changeDetectorRefs: ChangeDetectorRef) { }

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

  AjoutTaxe() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(AjoutTaxeComponent, dialogConfig)
      .afterClosed().subscribe(
        res => {
          console.log(res);
        }
      )

  }

}
