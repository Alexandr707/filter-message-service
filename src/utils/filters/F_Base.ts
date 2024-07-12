import { Filter } from 'types/filterMessageTypes';
import { FilterItem } from './FilterItem';
import { F_AndFilter } from './F_AndFilter';
import { F_OrFilter } from './F_OrFilter';
import { F_String } from './F_String';
import { F_Number } from './F_Number';
import { F_Boolean } from './F_Boolean';
import { F_Date } from './F_Date';

export class F_Base<T extends {}> extends FilterItem<T> {
  filterItem?: FilterItem<T>;

  constructor(options: Filter) {
    super();
    if (options.type == 'and') this.filterItem = new F_AndFilter(options);
    if (options.type == 'or') this.filterItem = new F_OrFilter(options);
    if (options.type == 'string') this.filterItem = new F_String(options);
    if (options.type == 'number') this.filterItem = new F_Number(options);
    if (options.type == 'boolean') this.filterItem = new F_Boolean(options);
    if (options.type == 'date') this.filterItem = new F_Date(options);
  }

  filter(v: T): boolean {
    if (!v) return false;
    if (!this.filterItem) return false;
    return this.filterItem.filter(v);
  }
}
