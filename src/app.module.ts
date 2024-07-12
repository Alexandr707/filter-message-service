import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { AppLoggerMiddleware } from './middlewares/AppLoggerMiddleware';

@Module({
  imports: [MessagesModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
