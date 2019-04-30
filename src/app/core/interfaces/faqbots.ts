export interface IArticleItem {
    'answers'?: any[];
    'category_id'?: string;
    'created_at'?: number;
    'questions'?: any[];
    'section_id'?: string;
    'updated_at'?: number;
}
export interface ICategoryMappingItem {
    'category_id'?: string;
    'name'?: string;
    'section_ids'?: number[];
}
export interface ICorpus {

    'agent_handover'?: boolean;
    'algorithm'?: {
        'id'?: string;
        'name'?: string;
    };
    'bot_id'?: number;
    'category_mapping'?: ICategoryMappingItem[];
    'created_at'?: number;
    'created_by'?: number;
    'description'?: string;
    'first_draft'?: boolean;
    'id'?: number;
    'model_id'?: string;
    'model_version_id'?: number;
    'parent_corpus'?: number;
    'resource_uri'?: string;
    'sections'?: IArticleItem[];
    'state'?: string;
    'updated_at'?: number;
    'updated_by'?: number;

}
