import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FilterPipe } from './catalogue/filter.pipe';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './service/article.service';
import { PanierState } from '../shared/states/panier-state';
import { BtnAddPanierComponent } from './btn-add-panier/btn-add-panier.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './auth.guard';
import { ApiHttpInterceptor } from './api-http-interceptor';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: CatalogueComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'connexion', component: ConnexionComponent },
  // { path: 'catalogue', component: CatalogueComponent},
  // { path: 'catalogue/:ref', component: DetailArticleComponent},
  { path: 'catalogue', component: CatalogueComponent, canActivate: [AuthGuard]},
  { path: 'catalogue/:ref', component: DetailArticleComponent, canActivate: [AuthGuard] },
  { path: 'panier', component: PanierComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    HeaderComponent,
    FormulaireComponent,
    FilterPipe,
    PanierComponent,
    HomeComponent,
    ArticleComponent,
    BtnAddPanierComponent,
    DetailArticleComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([PanierState])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ArticleService,
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
