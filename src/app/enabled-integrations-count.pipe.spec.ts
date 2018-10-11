import { EnabledIntegrationsCountPipe } from './enabled-integrations-count.pipe';

describe('EnabledIntegrationsCountPipe', () => {
  it('create an instance', () => {
    const pipe = new EnabledIntegrationsCountPipe();
    expect(pipe).toBeTruthy();
  });
});
