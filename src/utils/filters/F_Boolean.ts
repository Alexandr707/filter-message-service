import { OperationMethod } from 'types/OperationMethod';
import { FilterItem } from './FilterItem';
import { BooleanFilter } from 'types/filterMessageTypes';

export class F_Boolean<T extends {}> extends FilterItem<T> {
  field: string;
  operation?: OperationMethod<T>;
  value: boolean;

  constructor(options: BooleanFilter) {
    super();
    this.field = options.field;
    if (options.operation in this) this.operation = this[options.operation];
    this.value = options.value;
  }

  filter(v: T) {
    if (!v) return false;
    if (!this.operation) return false;
    return this.operation(v);
  }

  eq(v: T) {
    if (this.field in v) {
      return v[this.field] === this.value;
    }
    return false;
  }
}
