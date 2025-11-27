import { Test, TestingModule } from '@nestjs/testing';
import { AlarmsService } from './alarms.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

describe('AlarmsService', () => {
  let service: AlarmsService;
  let commandBus: CommandBus;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlarmsService, CommandBus, QueryBus],
    }).compile();

    service = module.get<AlarmsService>(AlarmsService);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
