export namespace AppHelper {
  export const utcToLocale = (date: Date | string) => {
    return new Date(date);
  };

  export const createRandomData = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };
}
