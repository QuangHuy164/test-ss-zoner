import { Test, TestingModule } from '@nestjs/testing';
import { AlarmsController } from './alarms.controller';
import { AlarmsService } from '../../application/alarms.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

describe('AlarmsController', () => {
  let controller: AlarmsController;
  let service: AlarmsService;
  let commandBus: CommandBus;
  let queryBus: QueryBus;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlarmsController],
      providers: [AlarmsService, CommandBus, QueryBus],
    }).compile();

    controller = module.get<AlarmsController>(AlarmsController);
    service = module.get<AlarmsService>(AlarmsService);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
