import { FilterItem } from './FilterItem';
import { OrFilter } from 'types/filterMessageTypes';
import { F_Base } from './F_Base';

export class F_OrFilter<T extends {}> extends FilterItem<T> {
  filters: FilterItem<T>[];

  constructor(options: OrFilter) {
    super();
    this.filters = options.filters.map((f) => new F_Base(f));
  }

  filter(v: T) {
    if (!v) return false;
    return this.filters.some((f) => f.filter(v));
  }
}
