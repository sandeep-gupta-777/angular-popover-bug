import {Pipe, PipeTransform} from '@angular/core';
import {FormsService} from './forms.service';

@Pipe({
  name: 'validationPipe'
})
export class ValidationPipePipe implements PipeTransform {

  transform(value: any, config: { start_with_alphanumeric?: boolean, required?: boolean, image?: boolean, https?: boolean, max?: number }): any {

    if (config.required) {
      if (!value) {
        return {'error': {message: 'Required'}};
      }
    }

    if (config.https) {
      if (!value.startsWith('https://')) {
        return {'error': {message: 'Please provide a url which starts with https'}};
      }
    }

    if (config.max) {
      if (value.length > config.max) {
        return {'error': {message: `Maximum allowed length ${config.max}`}};
      }
    }

    if (config.image) {
      const pattern = /\.(gif|jpg|jpeg|tiff|png|svg)$/i;
      return pattern.test(value) ? null : {'error': {message: 'Only gif, jpg, jpeg, tiff, png, svg are allowed for images'}};
    }
    if (config.start_with_alphanumeric) {
      if (!value) {
        return;
      }
      const pattern = /^[a-zA-Z1-9].*/i;
      return pattern.test(value) ? null : {'error': {message: 'First letter should be alphanumeric'}};
    }
  }

}
