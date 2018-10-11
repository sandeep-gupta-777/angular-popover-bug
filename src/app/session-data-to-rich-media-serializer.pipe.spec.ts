import { SessionDataToRichMediaSerializerPipe } from './session-data-to-rich-media-serializer.pipe';

describe('SessionDataToRichMediaSerializerPipe', () => {
  it('create an instance', () => {
    const pipe = new SessionDataToRichMediaSerializerPipe();
    expect(pipe).toBeTruthy();
  });
});
