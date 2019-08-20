export interface IRoleInfo {
  base_role: number;
  created_at: number;
  created_by: string;
  enterprise_id: number;
  id: number;
  is_system_role: false;
  name: string;
  permissions: {
    actions: number[]
  };
  session_expiry_time: number;
  updated_at: number;
  updated_by: string;
}
