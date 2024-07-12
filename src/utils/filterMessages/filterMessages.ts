import { Filter, Message } from 'types/filterMessageTypes';
import { F_Base } from '../filters/F_Base';

export function filterMessages(messages: Message[], filter: Filter): Message[] {
  const f = new F_Base(filter);

  return messages.filter((m) => f.filter(m));
}
