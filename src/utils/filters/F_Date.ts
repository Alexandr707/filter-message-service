import { OperationMethod } from 'types/OperationMethod';
import { DateFilter } from 'types/filterMessageTypes';
import { FilterItem } from './FilterItem';

export class F_Date<T extends {}> extends FilterItem<T> {
  field: string;
  operation?: OperationMethod<T>;
  value: Date;

  constructor(options: DateFilter) {
    super();
    this.field = options.field;
    if (options.operation in this) this.operation = this[options.operation];
    this.value = new Date(options.value);
  }

  filter(v: T) {
    if (!v) return false;
    if (!this.operation) return false;
    return this.operation(v);
  }

  eq(v: T) {
    if (this.field in v) {
      return new Date(v[this.field]).getTime() === this.value.getTime();
    }
    return false;
  }

  after(v: T) {
    if (this.field in v) {
      return new Date(v[this.field]).getTime() > this.value.getTime();
    }
    return false;
  }

  before(v: T) {
    if (this.field in v) {
      return new Date(v[this.field]).getTime() < this.value.getTime();
    }
    return false;
  }
}
