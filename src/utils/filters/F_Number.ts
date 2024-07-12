import { OperationMethod } from 'types/OperationMethod';
import { FilterItem } from './FilterItem';
import { NumberFilter } from 'types/filterMessageTypes';

export class F_Number<T extends {}> extends FilterItem<T> {
  field: string;
  operation?: OperationMethod<T>;
  value: number;

  constructor(options: NumberFilter) {
    super();
    this.field = options.field;
    if (options.operation in this) this.operation = this[options.operation];
    this.value = options.value;
  }

  filter(v: T): boolean {
    if (!v) return false;
    if (!this.operation) return false;
    return this.operation(v);
  }

  eq(v: T): boolean {
    if (this.field in v) {
      return v[this.field] === this.value;
    }
    return false;
  }

  gt(v: T) {
    if (this.field in v) {
      return v[this.field] > this.value;
    }
    return false;
  }

  lt(v: T) {
    if (this.field in v) {
      return v[this.field] < this.value;
    }
    return false;
  }

  gte(v: T) {
    if (this.field in v) {
      return v[this.field] >= this.value;
    }
    return false;
  }

  lte(v: T) {
    if (this.field in v) {
      return v[this.field] <= this.value;
    }
    return false;
  }
}
