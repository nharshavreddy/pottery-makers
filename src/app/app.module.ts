import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { HomeComponent } from './pages/home/home.component';
import { TerracottaComponent } from './pages/terracotta/terracotta.component';
import { ConcreteComponent } from './pages/concrete/concrete.component';
import { TraditionalComponent } from './pages/traditional/traditional.component';
import { EliteComponent } from './pages/elite/elite.component';
import { TexturedComponent } from './pages/textured/textured.component';
import { LandscapingComponent } from './pages/landscaping/landscaping.component';
import { RawClayComponent } from './pages/raw-clay/raw-clay.component';
import { PotteryClassesComponent } from './pages/pottery-classes/pottery-classes.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductCardComponent,
    InquiryFormComponent,
    HomeComponent,
    TerracottaComponent,
    ConcreteComponent,
    TraditionalComponent,
    EliteComponent,
    TexturedComponent,
    LandscapingComponent,
    RawClayComponent,
    PotteryClassesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
