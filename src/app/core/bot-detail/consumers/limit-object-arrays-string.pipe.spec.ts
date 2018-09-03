import { LimitObjectArraysStringPipe } from './limit-object-arrays-string.pipe';

describe('LimitObjectArraysStringPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitObjectArraysStringPipe();
    expect(pipe).toBeTruthy();
  });
});
