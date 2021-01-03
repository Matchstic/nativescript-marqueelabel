import { CSSType } from '@nativescript/core/ui';
import { Label as LabelDefinition } from '@nativescript/core/ui/label';

@CSSType('MarqueeLabel')
export class NSMarqueeLabel extends LabelDefinition {
  public createNativeView() {
    const view = MarqueeLabel.new();
    view.scrollRate = 24.0;
    view.fadeLength = 6.0;

    return view;
  }
}

// @ts-ignore
NSMarqueeLabel.prototype.recycleNativeView = "auto";
