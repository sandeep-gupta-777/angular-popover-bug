import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IApi} from './interfaces';

@Injectable()
export class DevService {

  constructor(private formBuilder: FormBuilder) {}

  prePostmanPatchTransform(apiDetails) {
    const headers = apiDetails.headers && this.prettyStringify(apiDetails.headers) ||  this.prettyStringify({});
    const body = apiDetails.body && this.prettyStringify(apiDetails.body) ||  this.prettyStringify({});
    const response = apiDetails.response && this.prettyStringify(apiDetails.response) ||  this.prettyStringify({});
    const response_headers = apiDetails.response_headers && this.prettyStringify(apiDetails.response_headers) ||  this.prettyStringify({});
    return{
      ...apiDetails,
      body,
      headers,
      response,
      response_headers
    };
  }

  prettyStringify(obj) {
    return JSON.stringify(obj, null, 2);
  }

  createPostmanForm(apiDetails: IApi= {}) {
    return this.formBuilder.group(
      {
        method: [apiDetails.method || '', Validators.required],
        url: [apiDetails.url || '', Validators.required],
        body: [apiDetails.body],
        headers: [apiDetails.headers],
        response: [apiDetails.response],
        response_headers: [apiDetails.response_headers],
      }
    );
  }
}
