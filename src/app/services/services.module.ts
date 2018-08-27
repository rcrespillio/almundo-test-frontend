import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsProviderService } from './hotels.provider.service';
import { ResizeService } from './resize.service';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [HotelsProviderService, DatabaseService, ResizeService]
})
export class ServicesModule { }
