import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './item.service';
import { Browser, browser } from 'protractor';
import { importType } from '@angular/compiler/src/output/output_ast';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
    
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    
        
    
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
