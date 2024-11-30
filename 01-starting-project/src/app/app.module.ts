import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], //for module components
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule, TasksModule] // for standalone components
})
export class AppModule {

}