import { type Database } from "./supabase.types";

export type FailedGigAssignmentViewRow =
  Database["public"]["Views"]["failed_gig_assignments_view"]["Row"];

export type WorkerRow = Database["public"]["Tables"]["workers"]["Row"];

export type BusinessRow = Database["public"]["Tables"]["businesses"]["Row"];

export type GigRow = Database["public"]["Tables"]["gigs"]["Row"];

export type GigViewRow = Database["public"]["Views"]["gigs_view"]["Row"];

export type PayoutViewRow = Database["public"]["Views"]["payouts_view"]["Row"];

type DbAction = "INSERT" | "UPDATE" | "DELETE";
export interface WebhookPayload<T, K extends DbAction> {
  type: K;
  table: string;
  schema: string;
  record: T;
  old_record: T;
}

export type NearbyWorkerReturn =
  Database["public"]["Functions"]["find_nearby_workers_by_coords"]["Returns"][0];

export type PayoutInsert = Database["public"]["Tables"]["payouts"]["Insert"];

export interface AuthUser {
  id: string;
  aud: string;
  role: string;
  email: string;
  phone: null;
  created_at: string;
  deleted_at: null;
  invited_at: null;
  updated_at: string;
  instance_id: string;
  is_sso_user: boolean;
  banned_until: null;
  confirmed_at: null;
  email_change: string;
  is_anonymous: boolean;
  phone_change: string;
  is_super_admin: null;
  recovery_token: string;
  last_sign_in_at: null;
  recovery_sent_at: null;
  raw_app_meta_data: Raw_app_meta_data;
  confirmation_token: string;
  email_confirmed_at: null;
  encrypted_password: string;
  phone_change_token: string;
  phone_confirmed_at: null;
  raw_user_meta_data: Raw_user_meta_data;
  confirmation_sent_at: null;
  email_change_sent_at: null;
  phone_change_sent_at: null;
  email_change_token_new: string;
  reauthentication_token: string;
  reauthentication_sent_at: null;
  email_change_token_current: string;
  email_change_confirm_status: number;
}
interface Raw_app_meta_data {
  provider: string;
  providers: string[];
}
interface Raw_user_meta_data {
  account_type: string;
}
