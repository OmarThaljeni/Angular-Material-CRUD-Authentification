import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Fournisseur } from 'src/app/Models/Fournisseur';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { AjoutFournisseursComponent } from '../ajout-fournisseurs/ajout-fournisseurs.component';
@Component({
  selector: 'app-table-fournisseurs',
  templateUrl: './table-fournisseurs.component.html',
  styleUrls: ['./table-fournisseurs.component.scss']
})
export class TableFournisseursComponent implements OnInit {

  
  //ELEMENT_DATA: Fournisseur[];
  ELEMENT_DATA: Fournisseur[] = [
    { nom: '1', adresse: 'AAAAAA', email: '1.0079', matricule: 'zaaaH', catégories: '252222', pays: 'tunis' },
    { nom: '1', adresse: 'AAAAAA', email: '1.0079', matricule: 'zaaaH', catégories: '252222', pays: 'tunis' },
    { nom: '1', adresse: 'AAAAAA', email: '1.0079', matricule: 'zaaaH', catégories: '252222', pays: 'tunis' },
    { nom: '1', adresse: 'AAAAAA', email: '1.0079', matricule: 'zaaaH', catégories: '252222', pays: 'tunis' },
   

  ];
  displayedColumns: string[] = ['nom', 'adresse', 'email', 'matricule', 'catégories', 'pays', 'actions'];
  dataSource = new MatTableDataSource<Fournisseur>(this.ELEMENT_DATA);

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
  AjoutFournisseur() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(AjoutFournisseursComponent, dialogConfig)
      .afterClosed().subscribe(
        res => {
          console.log(res);
        }
      )

  }
}
