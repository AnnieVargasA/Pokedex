import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-recent-searches',
  standalone: true,
  templateUrl: './recent-searches.component.html',
  imports: [CommonModule, TranslateModule],
})
export class RecentSearchesComponent {
  @Output() search = new EventEmitter<string>();
  get recents(): string[] {
    return JSON.parse(sessionStorage.getItem('recents') || '[]');
  }
  searchRecent(name: string) {
    this.search.emit(name);
  }
}