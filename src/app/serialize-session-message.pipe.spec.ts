import { SerializeSessionMessagePipe } from './serialize-session-message.pipe';

describe('SerializeSessionMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new SerializeSessionMessagePipe();
    expect(pipe).toBeTruthy();
  });
});
