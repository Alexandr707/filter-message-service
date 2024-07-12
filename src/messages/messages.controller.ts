import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { Filter, Message } from 'types/filterMessageTypes';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post('/filter')
  @HttpCode(200)
  filter(
    @Body('messages') messages: Message[],
    @Body('filter') filter: Filter,
  ) {
    if (!messages)
      throw new BadRequestException('необходимо указать поле "messages"');
    if (!filter)
      throw new BadRequestException('необходимо указать поле "filter"');
    try {
      return this.messagesService.filter(messages, filter);
    } catch (e) {
      throw new InternalServerErrorException(
        'что-то пошло не так...\n' + e.message,
        e.stack,
      );
    }
  }
}
