import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'users-feature-folders-create',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatCardModule],
  templateUrl: './feature-folders-create.component.html',
  styleUrls: ['./feature-folders-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureFoldersCreateComponent {}
