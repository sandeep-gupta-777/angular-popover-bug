import {IEnterpriseUser} from '../app/core/interfaces/enterprise-users';

export interface IEnterpriseProfileInfo {
  "_id": string
  "created_at": string
  "email": string
  "enterpriseUniqueName": string
  "industry": string
  "logo": string
  "name": string
  "phone": string
  "tier": string
  "updated_at": string
  "updated_by": string
  "websiteUrl": string,
  "enterpriseusers":IEnterpriseUser[]
}
