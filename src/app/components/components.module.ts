import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { ResultsContainerComponent } from './results-container/results-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [HeaderComponent, LeftBarComponent, ResultsContainerComponent],
  exports: [HeaderComponent, LeftBarComponent, ResultsContainerComponent]
})
export class ComponentsModule { }
