declare module 'odometer' {
    export default class Odometer {
      constructor(options: { el: HTMLElement, value: number, format: string });
      update(value: number): void;
      // Add other methods/properties you use
    }
  }