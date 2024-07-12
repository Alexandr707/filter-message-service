import { Injectable } from '@nestjs/common';
import { filterMessages } from 'src/utils/filterMessages';
import { Filter, Message } from 'types/filterMessageTypes';

@Injectable()
export class MessagesService {
  filter(messages: Message[], filter: Filter): Message[] {
    return filterMessages(messages, filter);
  }
}
