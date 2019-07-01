import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { CarouselComponent } from './core/home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RecipesComponent,
    RecipeDetailComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
