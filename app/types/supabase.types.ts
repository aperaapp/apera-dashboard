export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      businesses: {
        Row: {
          address: string | null
          avatar: string | null
          bio: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          is_deleted: boolean
          payment_method_id: string | null
          phone_is_verified: boolean
          phone_number: string | null
          stripe_customer_id: string | null
        }
        Insert: {
          address?: string | null
          avatar?: string | null
          bio?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          is_deleted?: boolean
          payment_method_id?: string | null
          phone_is_verified?: boolean
          phone_number?: string | null
          stripe_customer_id?: string | null
        }
        Update: {
          address?: string | null
          avatar?: string | null
          bio?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          is_deleted?: boolean
          payment_method_id?: string | null
          phone_is_verified?: boolean
          phone_number?: string | null
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      dashboard_users: {
        Row: {
          avatar: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          role: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          email?: string | null
          id: string
          name: string
          role: string
        }
        Update: {
          avatar?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          role?: string
        }
        Relationships: []
      }
      failed_gig_matches: {
        Row: {
          created_at: string
          gig_id: string
          id: string
          last_retry: string | null
          reason: string
        }
        Insert: {
          created_at?: string
          gig_id: string
          id?: string
          last_retry?: string | null
          reason: string
        }
        Update: {
          created_at?: string
          gig_id?: string
          id?: string
          last_retry?: string | null
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "failed_gig_matches_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "failed_gig_matches_gig_id_fkey"
            columns: ["gig_id"]
            isOneToOne: false
            referencedRelation: "gigs_view"
            referencedColumns: ["id"]
          },
        ]
      }
      gigs: {
        Row: {
          assigned_worker_id: string | null
          business_id: string
          clock_in_by: string | null
          clock_in_time: string | null
          clock_out_by: string | null
          clock_out_time: string | null
          created_at: string
          day: string
          description: string
          end_time: string
          extra_instructions: string | null
          hourly_pay: number
          id: string
          latitude: number
          location: unknown
          location_name: string | null
          longitude: number
          matched_worker_id: string | null
          payed_out: boolean
          required_specialties: string[]
          start_time: string
          status: Database["public"]["Enums"]["work_status"]
          title: string
          worker_rating: number
        }
        Insert: {
          assigned_worker_id?: string | null
          business_id: string
          clock_in_by?: string | null
          clock_in_time?: string | null
          clock_out_by?: string | null
          clock_out_time?: string | null
          created_at?: string
          day: string
          description: string
          end_time: string
          extra_instructions?: string | null
          hourly_pay: number
          id?: string
          latitude?: number
          location: unknown
          location_name?: string | null
          longitude?: number
          matched_worker_id?: string | null
          payed_out?: boolean
          required_specialties: string[]
          start_time: string
          status?: Database["public"]["Enums"]["work_status"]
          title: string
          worker_rating?: number
        }
        Update: {
          assigned_worker_id?: string | null
          business_id?: string
          clock_in_by?: string | null
          clock_in_time?: string | null
          clock_out_by?: string | null
          clock_out_time?: string | null
          created_at?: string
          day?: string
          description?: string
          end_time?: string
          extra_instructions?: string | null
          hourly_pay?: number
          id?: string
          latitude?: number
          location?: unknown
          location_name?: string | null
          longitude?: number
          matched_worker_id?: string | null
          payed_out?: boolean
          required_specialties?: string[]
          start_time?: string
          status?: Database["public"]["Enums"]["work_status"]
          title?: string
          worker_rating?: number
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
          base_amount: number
          bs_amount: number
          bs_fee: number
          business_id: string
          created_at: string
          gig_id: string
          id: string
          status: Database["public"]["Enums"]["payout_status"]
          stripe_intent_id: string
          wk_amount: number
          wk_fee: number
          worker_id: string
        }
        Insert: {
          base_amount: number
          bs_amount: number
          bs_fee: number
          business_id: string
          created_at?: string
          gig_id: string
          id?: string
          status?: Database["public"]["Enums"]["payout_status"]
          stripe_intent_id: string
          wk_amount: number
          wk_fee: number
          worker_id: string
        }
        Update: {
          base_amount?: number
          bs_amount?: number
          bs_fee?: number
          business_id?: string
          created_at?: string
          gig_id?: string
          id?: string
          status?: Database["public"]["Enums"]["payout_status"]
          stripe_intent_id?: string
          wk_amount?: number
          wk_fee?: number
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
          id: number
          image: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          title?: string
        }
        Relationships: []
      }
      worker_location: {
        Row: {
          last_location: unknown | null
          latitude: number
          longitude: number
          updated_at: string | null
          worker_id: string
        }
        Insert: {
          last_location?: unknown | null
          latitude: number
          longitude: number
          updated_at?: string | null
          worker_id: string
        }
        Update: {
          last_location?: unknown | null
          latitude?: number
          longitude?: number
          updated_at?: string | null
          worker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "worker_location_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: true
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
      workers: {
        Row: {
          avatar: string | null
          charges_enabled: boolean
          created_at: string
          details_submitted: boolean
          dob: string | null
          email: string
          full_name: string | null
          id: string
          is_deleted: boolean
          last_location: unknown | null
          last_location_updated_at: string | null
          latitude: number | null
          longitude: number | null
          payouts_enabled: boolean
          phone_is_verified: boolean
          phone_number: string | null
          specialties: string[] | null
          status: Database["public"]["Enums"]["worker_status"]
          stripe_account_id: string | null
        }
        Insert: {
          avatar?: string | null
          charges_enabled?: boolean
          created_at?: string
          details_submitted?: boolean
          dob?: string | null
          email: string
          full_name?: string | null
          id?: string
          is_deleted?: boolean
          last_location?: unknown | null
          last_location_updated_at?: string | null
          latitude?: number | null
          longitude?: number | null
          payouts_enabled?: boolean
          phone_is_verified?: boolean
          phone_number?: string | null
          specialties?: string[] | null
          status?: Database["public"]["Enums"]["worker_status"]
          stripe_account_id?: string | null
        }
        Update: {
          avatar?: string | null
          charges_enabled?: boolean
          created_at?: string
          details_submitted?: boolean
          dob?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_deleted?: boolean
          last_location?: unknown | null
          last_location_updated_at?: string | null
          latitude?: number | null
          longitude?: number | null
          payouts_enabled?: boolean
          phone_is_verified?: boolean
          phone_number?: string | null
          specialties?: string[] | null
          status?: Database["public"]["Enums"]["worker_status"]
          stripe_account_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      gigs_view: {
        Row: {
          assigned_worker_id: string | null
          assigned_worker_name: string | null
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
          location: unknown | null
          location_name: string | null
          longitude: number | null
          matched_worker_id: string | null
          payed_out: boolean | null
          required_specialties: string[] | null
          start_time: string | null
          status: Database["public"]["Enums"]["work_status"] | null
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
            foreignKeyName: "gigs_matched_worker_id_fkey"
            columns: ["matched_worker_id"]
            isOneToOne: false
            referencedRelation: "workers"
            referencedColumns: ["id"]
          },
        ]
      }
      payouts_view: {
        Row: {
          base_amount: number | null
          bs_amount: number | null
          bs_fee: number | null
          business_id: string | null
          business_name: string | null
          created_at: string | null
          gig_id: string | null
          id: string | null
          status: Database["public"]["Enums"]["payout_status"] | null
          stripe_intent_id: string | null
          wk_amount: number | null
          wk_fee: number | null
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
      calculate_distance: {
        Args: {
          point1: unknown
          point2: unknown
        }
        Returns: number
      }
      find_nearby_open_gigs_by_coords: {
        Args: {
          lat: number
          long: number
          radius?: number
        }
        Returns: {
          id: string
          location: unknown
          required_specialties: string[]
          status: Database["public"]["Enums"]["work_status"]
          start_time: string
          end_time: string
          day: string
          distance: number
        }[]
      }
      find_nearby_workers: {
        Args: {
          search_point: unknown
          radius?: number
        }
        Returns: {
          id: string
          last_location: unknown
          specialties: string[]
          coordinates: string
          distance: number
        }[]
      }
      find_nearby_workers_by_coords: {
        Args: {
          lat: number
          long: number
          radius?: number
        }
        Returns: {
          id: string
          last_location: unknown
          specialties: string[]
          payouts_enabled: boolean
          details_submitted: boolean
          charges_enabled: boolean
          email: string
          stripe_account_id: string
          phone_number: string
          status: Database["public"]["Enums"]["worker_status"]
          coordinates: string
          distance: number
          rating: number
        }[]
      }
      find_nearby_workers_by_coords_2: {
        Args: {
          lat: number
          long: number
          radius?: number
        }
        Returns: {
          id: string
          last_location: unknown
          specialties: string[]
          payouts_enabled: boolean
          details_submitted: boolean
          charges_enabled: boolean
          email: string
          stripe_account_id: string
          phone_number: string
          status: Database["public"]["Enums"]["worker_status"]
          coordinates: string
          distance: number
        }[]
      }
      set_worker_location: {
        Args: {
          p_worker_id: string
          p_latitude: number
          p_longitude: number
        }
        Returns: undefined
      }
    }
    Enums: {
      acceptance_state: "accepted" | "rejected" | "pending"
      mood: "happy" | "sad" | "excited" | "calm"
      online_status: "online" | "offline"
      payout_status: "pending" | "completed"
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
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
