import { HasChannelPipe } from './has-channel.pipe';

describe('HasChannelPipe', () => {
  it('create an instance', () => {
    const pipe = new HasChannelPipe();
    expect(pipe).toBeTruthy();
  });
});
