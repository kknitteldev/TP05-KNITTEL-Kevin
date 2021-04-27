import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, from, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { FormControl } from '@angular/forms';
import { ArticleService } from '../service/article.service';
import { Article } from 'src/shared/models/article';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {

  articles$!: Article[];

  articleSubscription!: Subscription;

  searchText: string = "";


  apiArticles$!: Observable<any>;

  constructor(private articleService: ArticleService) { }
  // ngOnInit(): void {
  //   this.articleSubscription = this.articleService.articleSubject.subscribe(
  //     (articles: Article[]) => {
  //       this.articles$! = articles;
  //     }
  //   );
  //   this.articleService.emitArticleSubject();
  // }

  ngOnInit(): void {
    this.articleSubscription = this.articleService.getArticles().subscribe(
      (articles: Article[]) => {
        this.articles$! = articles;
      }
    );
    this.articleService.emitArticleSubject();
  }

  // ngOnInit(): void {
  //   console.log("toto");
  //   // this.apiArticles$! = this.articleService.getArticles();
  //   this.articleService.getArticles().subscribe(result => { console.log(result); });
  // }
}
