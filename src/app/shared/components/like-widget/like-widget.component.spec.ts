import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () =>{

  let component: LikeWidgetComponent;

  beforeEach(() =>{
    component = new LikeWidgetComponent(new UniqueIdService());
  })

  it('', () =>{

  })

})
