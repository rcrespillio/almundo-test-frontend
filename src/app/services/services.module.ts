import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsProviderService } from './hotels.provider.service';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [HotelsProviderService, DatabaseService]
})
export class ServicesModule { }
