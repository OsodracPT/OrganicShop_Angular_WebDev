import { GithubFollowersService } from './services/github-followers.service';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http'
import {HttpModule, Http} from '@angular/http';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductPreviewComponent } from './search/product-preview.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { GitHubHomeComponent } from './git-hub-home/git-hub-home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    ProductPreviewComponent,
    FooterComponent, 
    FooterComponent, 
    ContactFormComponent, 
    PostsComponent, 
    GitHubProfileComponent, 
    NotFoundComponent,
    GitHubHomeComponent,
    GitHubFollowersComponent
    ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'order-success', component: OrderSuccessComponent},
      { path: 'my/orders', component: MyOrdersComponent},
      { path: 'login', component: LoginComponent},
      { path: 'admin/products', component: AdminProductsComponent},
      { path: 'github', component: GitHubHomeComponent},
      { path: 'followers/:username', component: GitHubProfileComponent},
      { path: 'followers', component: GitHubFollowersComponent},
      { path: 'posts', component: PostsComponent},
      { path: 'admin/orders', component: AdminOrdersComponent},
      { path: '**', component: NotFoundComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    GithubFollowersService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }