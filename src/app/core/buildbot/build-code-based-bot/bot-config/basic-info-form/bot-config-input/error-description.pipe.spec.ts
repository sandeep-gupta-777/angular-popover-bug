import { ErrorDescriptionPipe } from './error-description.pipe';

describe('ErrorDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
