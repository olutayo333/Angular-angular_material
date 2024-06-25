import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,Validators, FormBuilder  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';


import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-angular-material1', 
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule, MatIcon, ReactiveFormsModule,
    MatButtonModule,  MatIconModule, MatStepperModule, FormsModule, MatInputModule, MatFormFieldModule ],
  templateUrl: './angular-material1.component.html',
  styleUrl: './angular-material1.component.css'
})

export class AngularMaterial1Component {
  constructor(private _formBuilder:FormBuilder){}
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
