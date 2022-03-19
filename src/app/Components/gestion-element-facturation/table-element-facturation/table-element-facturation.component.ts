import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Element_facturation } from 'src/app/Models/Element-facturation';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { AjoutElementFacturationComponent } from '../ajout-element-facturation/ajout-element-facturation.component';

@Component({
  selector: 'app-table-element-facturation',
  templateUrl: './table-element-facturation.component.html',
  styleUrls: ['./table-element-facturation.component.scss']
})
export class TableElementFacturationComponent implements OnInit {
  //ELEMENT_DATA: Element-facturation[];
  ELEMENT_DATA: Element_facturation[] = [
    { montant: '1' },
    { montant: '1' },
    { montant: '1' },
    { montant: '1' },
    

  ];
  displayedColumns: string[] = ['montant', 'actions'];
  dataSource = new MatTableDataSource<Element_facturation>(this.ELEMENT_DATA);



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

  AjoutElement_facturation() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(AjoutElementFacturationComponent, dialogConfig)
      .afterClosed().subscribe(
        res => {
          console.log(res);
        }
      )

  }


}
