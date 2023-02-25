import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PlantsComponent } from './plants/plants.component';
import { SeedVarietiesComponent } from './seed-varieties/seed-varieties.component';
import { OrdersComponent } from './orders/orders.component';
import { LaunchNewProductComponent } from './launch-new-product/launch-new-product.component';
import { AllPlantersComponent } from './all-planters/all-planters.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersOnCategoryComponent } from './orders-on-category/orders-on-category.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddSeedComponent } from './add-seed/add-seed.component';
import { ViewSeedComponent } from './view-seed/view-seed.component';
import { AddPlantersComponent } from './add-planters/add-planters.component';
import { ViewPlanterComponent } from './view-planter/view-planter.component';
import { PlanterFilterationsComponent } from './planter-filterations/planter-filterations.component';
import { SeedFiltersComponent } from './seed-filters/seed-filters.component';


const allLinks:Routes = [
  {path:'about',component:AboutComponent},
  {path:'launchproduct',component:LaunchNewProductComponent},
  {path:'products',component:ViewAllProductsComponent},
  {path:'productDetail/:pid',component:ViewDetailsComponent},
  {path:'order',component:OrdersComponent},
  {path:'orderList',component:OrdersListComponent},
  {path:'orderListOnCategory',component:OrdersOnCategoryComponent},
  {path:'addOrder',component:AddOrderComponent},
  {path:'try',component:PlantsComponent},
  {path:'addSeed',component:AddSeedComponent},
  {path:'SeedsAvailable',component:SeedVarietiesComponent},
  {path:'seedDetails',component:ViewSeedComponent},
  {path:'addPlanter',component:AddPlantersComponent},
  {path:'PlantersAvailable',component:AllPlantersComponent},
  {path:'planterDetails',component:ViewPlanterComponent},
  {path:'planterFilters',component:PlanterFilterationsComponent},
  {path:'seedFilters',component:SeedFiltersComponent}
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PlantsComponent,
    SeedVarietiesComponent,
    OrdersComponent,
    LaunchNewProductComponent,
    AllPlantersComponent,
    ViewDetailsComponent,
    ViewAllProductsComponent,
    OrdersListComponent,
    OrdersOnCategoryComponent,
    AddOrderComponent,
    AddSeedComponent,
    ViewSeedComponent,
    AddPlantersComponent,
    ViewPlanterComponent,
    PlanterFilterationsComponent,
    SeedFiltersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
