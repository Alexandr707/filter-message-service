import { AndFilter } from 'types/filterMessageTypes';
import { FilterItem } from './FilterItem';
import { F_Base } from './F_Base';

export class F_AndFilter<T extends {}> extends FilterItem<T> {
  filters: FilterItem<T>[];

  constructor(options: AndFilter) {
    super();
    this.filters = options.filters.map((f) => new F_Base(f));
  }

  filter(v: T) {
    if (!v) return false;
    return this.filters.every((f) => f.filter(v));
  }
}
