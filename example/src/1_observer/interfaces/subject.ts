import { IObserver } from './observer';

export default interface ISubject {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    notify(): void;
}
