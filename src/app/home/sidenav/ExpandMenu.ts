import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector:'[expandMenu]',
    
    })
   
    export class ExpandMenu{
        name;
    @HostBinding('class.active') isOpen = false;
    @HostListener('click') toggleOpen($event){
    this.isOpen = !this.isOpen;
    }
    }