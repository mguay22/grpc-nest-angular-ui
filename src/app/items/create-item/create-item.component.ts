import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { ItemsServiceClient } from '../../../proto/items.pbsc';
import { CreateItemRequest } from '../../../proto/items.pb';
import { GrpcModule } from '../../grpc.module';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [GrpcModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.scss'
})
export class CreateItemComponent {
  name = new FormControl('');
  quantity = new FormControl();

  constructor(private readonly itemsService: ItemsServiceClient) {}

  createItem() {
    if (!this.name.value || !this.quantity.value) {
      return;
    }
    this.itemsService.createItem(new CreateItemRequest({
      name: this.name.value,
      quantity: this.quantity.value
    })).subscribe(res => {
      console.log(res)
    })
  }
}
