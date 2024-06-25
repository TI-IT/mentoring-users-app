import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFoldersListComponent } from '@users/materials/feature-folders-list';
import { MatDialog } from '@angular/material/dialog';
import { FeatureFoldersCreateComponent } from '@users/materials/feature-folders-create';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'users-users-materials',
  standalone: true,
  imports: [CommonModule, FeatureFoldersListComponent, MatIconModule,MatButtonModule],
  templateUrl: './users-materials.component.html',
  styleUrls: ['./users-materials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersMaterialsComponent {
  private readonly dialog = inject(MatDialog);

   openDialog():void{
     const dialogRef = this.dialog.open<FeatureFoldersCreateComponent, any, any>(FeatureFoldersCreateComponent, {

     });
     dialogRef.afterClosed().subscribe(result => {
       console.log(result)
     })
   }

}
