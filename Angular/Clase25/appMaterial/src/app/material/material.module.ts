import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatTabsModule,MatExpansionModule, MatSelectModule, MatRadioModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTabsModule,
        MatExpansionModule,
        MatSelectModule,
        MatRadioModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTabsModule,
        MatExpansionModule,
        MatSelectModule,
        MatRadioModule
    ],
    declarations: [
    ]
})
export class MaterialModule { }