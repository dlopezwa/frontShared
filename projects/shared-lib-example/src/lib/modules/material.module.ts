import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatIconModule, MatListModule, MatSidenavModule, MatSelectModule],
  exports: [MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatSelectModule],
})
export class MaterialModule {}
