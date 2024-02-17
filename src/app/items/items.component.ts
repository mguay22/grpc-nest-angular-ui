import { Component, OnInit } from '@angular/core';
import { GrpcModule } from '../grpc.module';
import { Empty, Item } from '../../proto/items.pb';
import { ItemsServiceClient } from '../../proto/items.pbsc';
import { CreateItemComponent } from './create-item/create-item.component';
import { Router } from '@angular/router';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [GrpcModule, CreateItemComponent, ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {
  items?: Item[] = []

  constructor(
    private readonly itemsService: ItemsServiceClient,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.itemsService.streamItems(new Empty()).subscribe(({ items }) => {
      console.log(items)
      this.items = items
    })
  }

  onItemClick(item: Item) {
    this.router.navigate(['items', item.id])
  }
}
