import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terracotta', component: TerracottaComponent },
  { path: 'concrete', component: ConcreteComponent },
  { path: 'traditional', component: TraditionalComponent },
  { path: 'elite', component: EliteComponent },
  { path: 'textured', component: TexturedComponent },
  { path: 'landscaping', component: LandscapingComponent },
  { path: 'raw-clay', component: RawClayComponent },
  { path: 'pottery-classes', component: PotteryClassesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
