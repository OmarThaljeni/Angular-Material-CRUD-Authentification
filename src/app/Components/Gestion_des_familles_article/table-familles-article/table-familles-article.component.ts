import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Famille_article } from 'src/app/Models/Famille-article';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { AjoutFamillesArticleComponent } from '../ajout-familles-article/ajout-familles-article.component';

@Component({
  selector: 'app-table-familles-article',
  templateUrl: './table-familles-article.component.html',
  styleUrls: ['./table-familles-article.component.scss']
})
export class TableFamillesArticleComponent implements OnInit {

   //ELEMENT_DATA: Famille_article[];
   ELEMENT_DATA: Famille_article[] = [
    { nom: '1', type_famille: 'AAAAAA' },
    { nom: '2',  type_famille: 'AAAAAA' },
    { nom: '3', type_famille: 'AAAAAA'},

  ];
  displayedColumns: string[] = ['nom', 'type_famille', 'actions'];
  dataSource = new MatTableDataSource<Famille_article>(this.ELEMENT_DATA);

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

  AjoutFamilles_article() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(AjoutFamillesArticleComponent, dialogConfig)
      .afterClosed().subscribe(
        res => {
          console.log(res);
        }
      )
  }
}
