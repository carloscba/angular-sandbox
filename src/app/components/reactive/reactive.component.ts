import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<string> = {
  next: value => console.log(value),
  error: error => console.log(error),
  complete: () => console.log('complete')
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})

export class ReactiveComponent implements OnInit {

  counter: number = 0;

  constructor() {
    const obs$ = new Observable<string>( subscriber => {
      subscriber.next('Hola');
      subscriber.next('Mundo');
      subscriber.complete();
      subscriber.next('Mundo');
    })
    
    obs$.subscribe(observer);    

    const interval$ = new Observable<number>( subscriber => {
      let count = 0;
      const interval = setInterval(()=>{
        subscriber.next(count++);
      },1000);

      return ()=> {
        clearInterval(interval);
      }
    })

    const interval = interval$.subscribe(
      value => this.counter = value
    )

    setTimeout(()=>{
      interval.unsubscribe();
    }, 5000)

    

  }

  ngOnInit(): void {
  }

}
