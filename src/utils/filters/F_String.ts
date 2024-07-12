import { StringFilter } from 'types/filterMessageTypes';
import { FilterItem } from './FilterItem';
import { OperationMethod } from 'types/OperationMethod';

export class F_String<T extends {}> extends FilterItem<T> {
  field: string;
  operation?: OperationMethod<T>;
  value: string;

  constructor(options: StringFilter) {
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

  startsWith(v: T) {
    if (this.field in v) {
      const value = v[this.field];
      if (typeof value == 'string' || value instanceof String) {
        return value.startsWith(this.value);
      }
    }
    return false;
  }

  endsWith(v: T) {
    if (this.field in v) {
      const value = v[this.field];
      if (typeof value == 'string' || value instanceof String) {
        return value.endsWith(this.value);
      }
    }
    return false;
  }

  contains(v: T) {
    if (this.field in v) {
      const value = v[this.field];
      if (typeof value == 'string' || value instanceof String) {
        return value.includes(this.value);
      }
    }
    return false;
  }
}
