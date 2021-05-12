import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPageScrollCoreModule, EasingLogic } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { BoldtextPipe } from '../core/pipes/boldtext.pipe';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BoldtextPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    SlideshowModule,
    SwiperModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    BoldtextPipe,
    SwiperModule
  ]
})
export class SharedModule {

}
