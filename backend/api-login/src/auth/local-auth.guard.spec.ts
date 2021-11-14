import { LocalAuthGuard } from './local-auth.guard';

describe('LocalAuth.Guard', () => {
  it('should be defined', () => {
    expect(new LocalAuthGuard()).toBeDefined();
  });
});
