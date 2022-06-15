import { Directive, ElementRef, Input } from '@angular/core';

import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

type MsgType = {
  [prop: string]: string;
};

const CLASS_NAME_MSG = 'inner-msg-error';

@Directive({
  selector: '[innerMsg]',
})
export class InnerMsgDirective {
  private destroy$ = new Subject<void>();

  @Input()
  innerMsg!: MsgType;

  @Input()
  singleKey: boolean = true;

  constructor(private el: ElementRef, private ngControl: NgControl) {}

  ngOnDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }

  ngOnInit(): void {
    const me = this;
    if (!me.ngControl) {
      throw new Error('Not Found NgControl');
    }

    me.ngControl.valueChanges?.subscribe((_) => {
      me.detectRenderMsg();
    });

    (me.el.nativeElement as HTMLElement).addEventListener('blur', () => {
      me.detectRenderMsg();
    });
  }

  detectRenderMsg() {
    const me = this;
    const isExistInnerMsg = (
      me.el.nativeElement as HTMLElement
    ).parentNode?.parentNode?.querySelectorAll(`.${CLASS_NAME_MSG}`);
    if (isExistInnerMsg) {
      me.removeRenderMsg();
    }

    if (me.ngControl.invalid && (me.ngControl.dirty || me.ngControl.touched)) {
      if (!!me.ngControl.errors) {
        const keysErrors = Object.keys(me.ngControl.errors);
        if (keysErrors.length === 0) {
          return;
        }
        // Có lỗi - Bài này mặc định là single key
        if (me.singleKey) {
          const msg = me.innerMsg[keysErrors[0]] ?? keysErrors[0];
          me.createElementByMsg(msg);
        } else {
          // Chưa hiểu lắm
        }
      }
    }
  }
  createElementByMsg(msg: string) {
    const div = document.createElement('div');
    div.classList.add(CLASS_NAME_MSG);
    div.innerHTML = `
      <lable></lable>
      <span style='color: red'>${msg}</span>
    `;
    const me = this;
    (
      me.el.nativeElement as HTMLElement
    ).parentElement?.parentElement?.appendChild(div);
  }

  removeRenderMsg() {
    const me = this;
    const parent = (me.el.nativeElement as HTMLElement).parentElement
      ?.parentElement;
    const elMsg = parent?.getElementsByClassName(CLASS_NAME_MSG);
    if (elMsg && elMsg.length > 0) {
      parent?.removeChild(elMsg.item(0) as Element);
    }
  }
}
