import {Injectable} from "@angular/core";
import {Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {ChatConsumerFormComponent} from "./chat-consumer-form/chat-consumer-form.component";
// import {ChatConsumerFormComponent} from "./chat-consumer-form/chat-consumer-form.component";
// import {ChatConsumerFormComponent} from "./chat-consumer-form/chat-consumer-form.component";

@Injectable()
export class FilePreviewOverlayService {

  // Inject overlay service
  constructor(private overlay: Overlay) { }

  open() {
    // Returns an OverlayRef (which is a PortalHost)
    const overlayRef = this.overlay.create();

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(ChatConsumerFormComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);
  }
}