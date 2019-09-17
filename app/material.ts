import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgModule} from '@angular/core';

@NgModule({
   
    imports: [MatInputModule,MatCardModule,MatButtonModule,MatGridListModule,MatFormFieldModule],
    exports:[MatInputModule,MatCardModule,MatButtonModule,MatGridListModule,MatFormFieldModule],
  })

  export class MaterialModule{}