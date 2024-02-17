/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './items.pb';
import { GRPC_ITEMS_SERVICE_CLIENT_SETTINGS } from './items.pbconf';
/**
 * Service client implementation for items.ItemsService
 */
@Injectable({ providedIn: 'any' })
export class ItemsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /items.ItemsService/CreateItem
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Item>>
     */
    createItem: (
      requestData: thisProto.CreateItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Item>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/items.ItemsService/CreateItem',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateItemRequest,
        responseClass: thisProto.Item
      });
    },
    /**
     * Unary call: /items.ItemsService/GetItem
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Item>>
     */
    getItem: (
      requestData: thisProto.GetItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Item>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/items.ItemsService/GetItem',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetItemRequest,
        responseClass: thisProto.Item
      });
    },
    /**
     * Server streaming: /items.ItemsService/StreamItems
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Items>>
     */
    streamItems: (
      requestData: thisProto.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Items>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/items.ItemsService/StreamItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.Empty,
        responseClass: thisProto.Items
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ITEMS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('items.ItemsService', settings);
  }

  /**
   * Unary call @/items.ItemsService/CreateItem
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Item>
   */
  createItem(
    requestData: thisProto.CreateItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Item> {
    return this.$raw
      .createItem(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/items.ItemsService/GetItem
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Item>
   */
  getItem(
    requestData: thisProto.GetItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Item> {
    return this.$raw
      .getItem(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/items.ItemsService/StreamItems
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Items>
   */
  streamItems(
    requestData: thisProto.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Items> {
    return this.$raw
      .streamItems(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
