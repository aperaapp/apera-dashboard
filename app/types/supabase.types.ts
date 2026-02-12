export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      businesses: {
        Row: {
          avatar: string | null
          bio: string | null
          created_at: string
          email: string
          expo_push_token: string | null
          full_name: string
          id: string
          masked_credit_card: string | null
          payment_method_id: string | null
          phone_is_verified: boolean
          phone_number: string | null
          stripe_customer_id: string | null
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          email: string
          expo_push_token?: string | null
          full_name: string
          id?: string
          masked_credit_card?: string | null
          payment_method_id?: string | null
          phone_is_verified?: boolean
          phone_number?: string | null
          stripe_customer_id?: string | null
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          email?: string
          expo_push_token?: string | null
          full_name?: string
          id?: string
          masked_credit_card?: string | null
          payment_method_id?: string | null
          phone_is_verified?: boolean
          phone_number?: string | null
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      dashboard_users: {
        Row: {
          created_at: string
          email: string
          id: string
          is_active: boolean | null
          role: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          is_active?: boolean | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      failed_gig_assignments: {
        Row: {
          created_at: string
          gig_id: string
          id: string
          last_retry: string | null
        }
        Insert: {
          created_at?: string
          gig_id: string
          id?: string
          last_retry?: string | null
        }
        Update: {
          created_at?: string
          gig_id?: string
          id?: string
          last_retry?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "failed_gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "failed_gig_assignments_view"
            referencedColumns: ["gig_id"]
          },
          {
            foreignKeyName: "failed_gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "failed_gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs_view"
            referencedColumns: ["id"]
          },
        ]
      }
      gig_assignments: {
        Row: {
          assigned_at: string
          gig_id: string
          id: string
          state: Database["public"]["Enums"]["acceptance_state"]
          worker_id: string
        }
        Insert: {
          assigned_at?: string
          gig_id: string
          id?: string
          state?: Database["public"]["Enums"]["acceptance_state"]
          worker_id: string
        }
        Update: {
          assigned_at?: string
          gig_id?: string
          id?: string
          state?: Database["public"]["Enums"]["acceptance_state"]
          worker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "failed_gig_assignments_view"
            referencedColumns: ["gig_id"]
          },
          {
            foreignKeyName: "gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gig_assignments_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
      gigs: {
        Row: {
          assigned_worker_id: string | null
          business_id: string | null
          clock_in_time: string | null
          clock_out_time: string | null
          created_at: string
          day: string
          description: string
          end_time: string
          extra_instructions: string | null
          hourly_pay: number
          id: string
          latitude: number | null
          location: unknown
          location_name: string | null
          longitude: number | null
          matched_worker_id: string | null
          payed_out: boolean
          required_specialties: string[]
          start_time: string
          status: Database["public"]["Enums"]["work_status"]
          title: string
        }
        Insert: {
          assigned_worker_id?: string | null
          business_id?: string | null
          clock_in_time?: string | null
          clock_out_time?: string | null
          created_at?: string
          day: string
          description: string
          end_time: string
          extra_instructions?: string | null
          hourly_pay: number
          id?: string
          latitude?: number | null
          location: unknown
          location_name?: string | null
          longitude?: number | null
          matched_worker_id?: string | null
          payed_out?: boolean
          required_specialties: string[]
          start_time: string
          status?: Database["public"]["Enums"]["work_status"]
          title: string
        }
        Update: {
          assigned_worker_id?: string | null
          business_id?: string | null
          clock_in_time?: string | null
          clock_out_time?: string | null
          created_at?: string
          day?: string
          description?: string
          end_time?: string
          extra_instructions?: string | null
          hourly_pay?: number
          id?: string
          latitude?: number | null
          location?: unknown
          location_name?: string | null
          longitude?: number | null
          matched_worker_id?: string | null
          payed_out?: boolean
          required_specialties?: string[]
          start_time?: string
          status?: Database["public"]["Enums"]["work_status"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "gigs_assigned_worker_id_fkey"
            columns: ["assigned_worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gigs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gigs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "gig_assignments_view"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "gigs_matched_worker_id_fkey"
            columns: ["matched_worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
      payouts: {
        Row: {
          bs_amount: number
          business_id: string
          created_at: string | null
          gig_id: string
          id: string
          notes: string | null
          status: string | null
          stripe_charge_id: string | null
          stripe_transfer_id: string | null
          wk_amount: number
          worker_id: string
        }
        Insert: {
          bs_amount: number
          business_id: string
          created_at?: string | null
          gig_id: string
          id?: string
          notes?: string | null
          status?: string | null
          stripe_charge_id?: string | null
          stripe_transfer_id?: string | null
          wk_amount: number
          worker_id: string
        }
        Update: {
          bs_amount?: number
          business_id?: string
          created_at?: string | null
          gig_id?: string
          id?: string
          notes?: string | null
          status?: string | null
          stripe_charge_id?: string | null
          stripe_transfer_id?: string | null
          wk_amount?: number
          worker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payouts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payouts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "gig_assignments_view"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "payouts_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "failed_gig_assignments_view"
            referencedColumns: ["gig_id"]
          },
          {
            foreignKeyName: "payouts_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payouts_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payouts_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
      specialties: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image: string | null
          order: number | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          order?: number | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          order?: number | null
          title?: string
        }
        Relationships: []
      }
      workers: {
        Row: {
          avatar: string | null
          charges_enabled: boolean
          created_at: string
          details_submitted: boolean
          dob: string | null
          email: string
          expo_push_token: string | null
          full_name: string
          id: string
          last_location: unknown
          last_location_updated_at: string | null
          latitude: number | null
          longitude: number | null
          payouts_enabled: boolean
          phone_is_verified: boolean
          phone_number: string
          specialties: string[]
          status: Database["public"]["Enums"]["worker_status"]
          stripe_account_id: string | null
          username: string
        }
        Insert: {
          avatar?: string | null
          charges_enabled?: boolean
          created_at?: string
          details_submitted?: boolean
          dob?: string | null
          email: string
          expo_push_token?: string | null
          full_name: string
          id?: string
          last_location?: unknown
          last_location_updated_at?: string | null
          latitude?: number | null
          longitude?: number | null
          payouts_enabled?: boolean
          phone_is_verified?: boolean
          phone_number: string
          specialties: string[]
          status?: Database["public"]["Enums"]["worker_status"]
          stripe_account_id?: string | null
          username: string
        }
        Update: {
          avatar?: string | null
          charges_enabled?: boolean
          created_at?: string
          details_submitted?: boolean
          dob?: string | null
          email?: string
          expo_push_token?: string | null
          full_name?: string
          id?: string
          last_location?: unknown
          last_location_updated_at?: string | null
          latitude?: number | null
          longitude?: number | null
          payouts_enabled?: boolean
          phone_is_verified?: boolean
          phone_number?: string
          specialties?: string[]
          status?: Database["public"]["Enums"]["worker_status"]
          stripe_account_id?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      failed_gig_assignments_view: {
        Row: {
          assigned_worker_id: string | null
          business_id: string | null
          clock_in_time: string | null
          clock_out_time: string | null
          day: string | null
          description: string | null
          end_time: string | null
          extra_instructions: string | null
          failed_assignment_created_at: string | null
          failed_assignment_id: string | null
          gig_id: string | null
          gig_status: Database["public"]["Enums"]["work_status"] | null
          hourly_pay: number | null
          last_retry: string | null
          location: unknown
          location_name: string | null
          required_specialties: string[] | null
          start_time: string | null
          title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gigs_assigned_worker_id_fkey"
            columns: ["assigned_worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gigs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gigs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "gig_assignments_view"
            referencedColumns: ["business_id"]
          },
        ]
      }
      gig_assignments_view: {
        Row: {
          assigned_at: string | null
          business_id: string | null
          business_name: string | null
          gig_day: string | null
          gig_description: string | null
          gig_end_time: string | null
          gig_extra_instructions: string | null
          gig_hourly_pay: number | null
          gig_id: string | null
          gig_latitude: number | null
          gig_location_name: string | null
          gig_longitude: number | null
          gig_required_specialties: string[] | null
          gig_start_time: string | null
          gig_title: string | null
          id: string | null
          state: Database["public"]["Enums"]["acceptance_state"] | null
          worker_email: string | null
          worker_id: string | null
          worker_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "failed_gig_assignments_view"
            referencedColumns: ["gig_id"]
          },
          {
            foreignKeyName: "gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gig_assignments_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gig_assignments_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
      gigs_view: {
        Row: {
          assigned_worker_id: string | null
          business_id: string | null
          business_name: string | null
          clock_in_time: string | null
          clock_out_time: string | null
          created_at: string | null
          day: string | null
          description: string | null
          end_time: string | null
          extra_instructions: string | null
          hourly_pay: number | null
          id: string | null
          latitude: number | null
          location_name: string | null
          longitude: number | null
          required_specialties: string[] | null
          start_time: string | null
          status: Database["public"]["Enums"]["work_status"] | null
          title: string | null
          worker_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gigs_assigned_worker_id_fkey"
            columns: ["assigned_worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gigs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gigs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "gig_assignments_view"
            referencedColumns: ["business_id"]
          },
        ]
      }
      payouts_view: {
        Row: {
          bs_amount: number | null
          business_email: string | null
          business_id: string | null
          business_name: string | null
          created_at: string | null
          gig_description: string | null
          gig_id: string | null
          gig_title: string | null
          id: string | null
          status: string | null
          stripe_charge_id: string | null
          stripe_transfer_id: string | null
          wk_amount: number | null
          worker_email: string | null
          worker_id: string | null
          worker_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payouts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payouts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "gig_assignments_view"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "payouts_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "failed_gig_assignments_view"
            referencedColumns: ["gig_id"]
          },
          {
            foreignKeyName: "payouts_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payouts_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payouts_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      find_nearby_workers: {
        Args: { radius?: number; search_point: unknown }
        Returns: {
          coordinates: string
          distance: number
          id: string
          last_location: unknown
          specialties: string[]
        }[]
      }
      find_nearby_workers_by_coords: {
        Args: { latitude: number; longitude: number; radius?: number }
        Returns: {
          coordinates: string
          distance: number
          id: string
          last_location: unknown
          specialties: string[]
        }[]
      }
      get_best_worker: {
        Args: {
          latitude: number
          longitude: number
          search_specialties: string[]
        }
        Returns: string
      }
      select_suitable_worker:
        | {
            Args: { nearby_workers: unknown; search_specialties: string[] }
            Returns: {
              distance: number
              location: unknown
              worker_id: string
            }[]
          }
        | {
            Args: { search_specialties: string[]; worker_ids: string[] }
            Returns: {
              distance: number
              location: unknown
              worker_id: string
            }[]
          }
      set_worker_location: {
        Args: { p_latitude: number; p_longitude: number; p_worker_id: string }
        Returns: undefined
      }
    }
    Enums: {
      acceptance_state: "accepted" | "rejected" | "pending"
      online_status: "online" | "offline"
      work_status:
        | "not_started"
        | "started"
        | "completed"
        | "not_matched"
        | "matched"
      worker_status:
        | "online"
        | "offline"
        | "working"
        | "matched"
        | "pending_clock_in"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          type: Database["storage"]["Enums"]["buckettype"]
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          type?: Database["storage"]["Enums"]["buckettype"]
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          type?: Database["storage"]["Enums"]["buckettype"]
          updated_at?: string | null
        }
        Relationships: []
      }
      buckets_analytics: {
        Row: {
          created_at: string
          deleted_at: string | null
          format: string
          id: string
          name: string
          type: Database["storage"]["Enums"]["buckettype"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          format?: string
          id?: string
          name: string
          type?: Database["storage"]["Enums"]["buckettype"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          format?: string
          id?: string
          name?: string
          type?: Database["storage"]["Enums"]["buckettype"]
          updated_at?: string
        }
        Relationships: []
      }
      buckets_vectors: {
        Row: {
          created_at: string
          id: string
          type: Database["storage"]["Enums"]["buckettype"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          type?: Database["storage"]["Enums"]["buckettype"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          type?: Database["storage"]["Enums"]["buckettype"]
          updated_at?: string
        }
        Relationships: []
      }
      iceberg_namespaces: {
        Row: {
          bucket_name: string
          catalog_id: string
          created_at: string
          id: string
          metadata: Json
          name: string
          updated_at: string
        }
        Insert: {
          bucket_name: string
          catalog_id: string
          created_at?: string
          id?: string
          metadata?: Json
          name: string
          updated_at?: string
        }
        Update: {
          bucket_name?: string
          catalog_id?: string
          created_at?: string
          id?: string
          metadata?: Json
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "iceberg_namespaces_catalog_id_fkey"
            columns: ["catalog_id"]
            isOneToOne: false
            referencedRelation: "buckets_analytics"
            referencedColumns: ["id"]
          },
        ]
      }
      iceberg_tables: {
        Row: {
          bucket_name: string
          catalog_id: string
          created_at: string
          id: string
          location: string
          name: string
          namespace_id: string
          remote_table_id: string | null
          shard_id: string | null
          shard_key: string | null
          updated_at: string
        }
        Insert: {
          bucket_name: string
          catalog_id: string
          created_at?: string
          id?: string
          location: string
          name: string
          namespace_id: string
          remote_table_id?: string | null
          shard_id?: string | null
          shard_key?: string | null
          updated_at?: string
        }
        Update: {
          bucket_name?: string
          catalog_id?: string
          created_at?: string
          id?: string
          location?: string
          name?: string
          namespace_id?: string
          remote_table_id?: string | null
          shard_id?: string | null
          shard_key?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "iceberg_tables_catalog_id_fkey"
            columns: ["catalog_id"]
            isOneToOne: false
            referencedRelation: "buckets_analytics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "iceberg_tables_namespace_id_fkey"
            columns: ["namespace_id"]
            isOneToOne: false
            referencedRelation: "iceberg_namespaces"
            referencedColumns: ["id"]
          },
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          level: number | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          user_metadata: Json | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          level?: number | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          level?: number | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      prefixes: {
        Row: {
          bucket_id: string
          created_at: string | null
          level: number
          name: string
          updated_at: string | null
        }
        Insert: {
          bucket_id: string
          created_at?: string | null
          level?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string
          created_at?: string | null
          level?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prefixes_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          user_metadata: Json | null
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          user_metadata?: Json | null
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          user_metadata?: Json | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "s3_multipart_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
      vector_indexes: {
        Row: {
          bucket_id: string
          created_at: string
          data_type: string
          dimension: number
          distance_metric: string
          id: string
          metadata_configuration: Json | null
          name: string
          updated_at: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          data_type: string
          dimension: number
          distance_metric: string
          id?: string
          metadata_configuration?: Json | null
          name: string
          updated_at?: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          data_type?: string
          dimension?: number
          distance_metric?: string
          id?: string
          metadata_configuration?: Json | null
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "vector_indexes_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets_vectors"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_prefixes: {
        Args: { _bucket_id: string; _name: string }
        Returns: undefined
      }
      can_insert_object: {
        Args: { bucketid: string; metadata: Json; name: string; owner: string }
        Returns: undefined
      }
      delete_leaf_prefixes: {
        Args: { bucket_ids: string[]; names: string[] }
        Returns: undefined
      }
      delete_prefix: {
        Args: { _bucket_id: string; _name: string }
        Returns: boolean
      }
      extension: { Args: { name: string }; Returns: string }
      filename: { Args: { name: string }; Returns: string }
      foldername: { Args: { name: string }; Returns: string[] }
      get_level: { Args: { name: string }; Returns: number }
      get_prefix: { Args: { name: string }; Returns: string }
      get_prefixes: { Args: { name: string }; Returns: string[] }
      get_size_by_bucket: {
        Args: never
        Returns: {
          bucket_id: string
          size: number
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
          prefix_param: string
        }
        Returns: {
          created_at: string
          id: string
          key: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          delimiter_param: string
          max_keys?: number
          next_token?: string
          prefix_param: string
          start_after?: string
        }
        Returns: {
          id: string
          metadata: Json
          name: string
          updated_at: string
        }[]
      }
      lock_top_prefixes: {
        Args: { bucket_ids: string[]; names: string[] }
        Returns: undefined
      }
      operation: { Args: never; Returns: string }
      search:
        | {
            Args: {
              bucketname: string
              levels?: number
              limits?: number
              offsets?: number
              prefix: string
            }
            Returns: {
              created_at: string
              id: string
              last_accessed_at: string
              metadata: Json
              name: string
              updated_at: string
            }[]
          }
        | {
            Args: {
              bucketname: string
              levels?: number
              limits?: number
              offsets?: number
              prefix: string
              search?: string
              sortcolumn?: string
              sortorder?: string
            }
            Returns: {
              created_at: string
              id: string
              last_accessed_at: string
              metadata: Json
              name: string
              updated_at: string
            }[]
          }
      search_legacy_v1: {
        Args: {
          bucketname: string
          levels?: number
          limits?: number
          offsets?: number
          prefix: string
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          created_at: string
          id: string
          last_accessed_at: string
          metadata: Json
          name: string
          updated_at: string
        }[]
      }
      search_v1_optimised: {
        Args: {
          bucketname: string
          levels?: number
          limits?: number
          offsets?: number
          prefix: string
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          created_at: string
          id: string
          last_accessed_at: string
          metadata: Json
          name: string
          updated_at: string
        }[]
      }
      search_v2:
        | {
            Args: {
              bucket_name: string
              levels?: number
              limits?: number
              prefix: string
              start_after?: string
            }
            Returns: {
              created_at: string
              id: string
              key: string
              metadata: Json
              name: string
              updated_at: string
            }[]
          }
        | {
            Args: {
              bucket_name: string
              levels?: number
              limits?: number
              prefix: string
              sort_column?: string
              sort_column_after?: string
              sort_order?: string
              start_after?: string
            }
            Returns: {
              created_at: string
              id: string
              key: string
              last_accessed_at: string
              metadata: Json
              name: string
              updated_at: string
            }[]
          }
    }
    Enums: {
      buckettype: "STANDARD" | "ANALYTICS" | "VECTOR"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      acceptance_state: ["accepted", "rejected", "pending"],
      online_status: ["online", "offline"],
      work_status: [
        "not_started",
        "started",
        "completed",
        "not_matched",
        "matched",
      ],
      worker_status: [
        "online",
        "offline",
        "working",
        "matched",
        "pending_clock_in",
      ],
    },
  },
  storage: {
    Enums: {
      buckettype: ["STANDARD", "ANALYTICS", "VECTOR"],
    },
  },
} as const

