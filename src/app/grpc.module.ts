import { NgModule } from "@angular/core";
import { GrpcCoreModule } from "@ngx-grpc/core";
import { GrpcWebClientModule } from "@ngx-grpc/grpc-web-client";

@NgModule({
    imports: [
        GrpcCoreModule.forChild(),
        GrpcWebClientModule.forChild({
            settings: { host: 'http://localhost:4200/api'  }
        })
    ]
})
export class GrpcModule {}