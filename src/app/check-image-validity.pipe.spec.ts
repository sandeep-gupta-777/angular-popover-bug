import { CheckImageValidityPipe } from './check-image-validity.pipe';

describe('CheckImageValidityPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckImageValidityPipe();
    expect(pipe).toBeTruthy();
  });
});
