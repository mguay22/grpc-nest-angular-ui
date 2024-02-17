import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemsServiceClient } from '../../../proto/items.pbsc';
import { ActivatedRoute } from '@angular/router';
import { GetItemRequest, Item } from '../../../proto/items.pb';
import { GrpcModule } from '../../grpc.module';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [GrpcModule, MatCardModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  @Input() name?: string;
  @Input() quantity?: number

  constructor(
    private readonly itemsService: ItemsServiceClient,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (!itemId) {
      return;
    }
    this.itemsService.getItem(new GetItemRequest({ id: itemId })).subscribe(item => {
      this.name = item.name;
      this.quantity = item.quantity
    })
  }
}
