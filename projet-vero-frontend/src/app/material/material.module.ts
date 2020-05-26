/**
 * Ce module sert à importer les différents modules d'Angular Material plutôt que faire ces imports directement dans app.module.ts.
 */

// Modules de base pour créer un module custom.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules d'Angular Material que l'on souhaite utilser dans l'application.
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports: [ MatToolbarModule, MatButtonModule, MatMenuModule, CommonModule, MatInputModule, MatCardModule ],
    exports: [ MatToolbarModule, MatButtonModule, MatMenuModule, CommonModule, MatInputModule, MatCardModule ]
})
  export class MaterialModule { }