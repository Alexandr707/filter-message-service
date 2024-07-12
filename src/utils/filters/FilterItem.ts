export abstract class FilterItem<T extends {}> {
  abstract filter(v: T): boolean;
}
