import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  templateUrl: './search-form.component.html',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pokemonName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-]+$')]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.search.emit(this.form.value.pokemonName.trim().toLowerCase());
    }
  }
}