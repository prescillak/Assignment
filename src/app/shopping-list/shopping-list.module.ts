import{NgModule} from '@angular/core';
import{RouterModule}from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import{SharedModule} from'../shared/shared.module';
import{LoggingService} from '../logging.service';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([    
            {path:'', component:ShoppingListComponent},
             ]),
             SharedModule
        ],
        // providers:[LoggingService]
})
export class ShoppingListModule{

}