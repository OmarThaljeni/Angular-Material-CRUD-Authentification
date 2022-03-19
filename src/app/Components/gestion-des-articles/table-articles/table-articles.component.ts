import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Article } from 'src/app/Models/Article';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { AjoutArticleComponent } from '../ajout-article/ajout-article.component';

@Component({
  selector: 'app-table-articles',
  templateUrl: './table-articles.component.html',
  styleUrls: ['./table-articles.component.scss']
})
export class TableArticlesComponent implements OnInit {

   //ELEMENT_DATA: Article[];
   ELEMENT_DATA: Article[] = [
    { nom: '1', quantité: 'AAAAAA', famille_article: '1.0079' },
    { nom: '2', quantité: 'DDDDDD', famille_article: '1.0079' },
    { nom: '3', quantité: 'CCCCCC', famille_article: '1.0079' },
    { nom: '1', quantité: 'Hydrogen', famille_article: '1.0079'},
    { nom: '1', quantité: 'Hydrogen', famille_article: '1.0079',},
    { nom: '1', quantité: 'Hydrogen', famille_article: '1.0079',},
    { nom: '1', quantité: 'Hydrogen', famille_article: '1.0079',},
    { nom: '1', quantité: 'Hydrogen', famille_article: '1.0079', },


  ];
  displayedColumns: string[] = ['nom', 'quantité', 'famille_article', 'actions'];
  dataSource = new MatTableDataSource<Article>(this.ELEMENT_DATA);


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
  AjoutArticle() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(AjoutArticleComponent, dialogConfig)
      .afterClosed().subscribe(
        res => {
          console.log(res);
        }
      )

  }
}
