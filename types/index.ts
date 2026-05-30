export type SlotStatus = 'available' | 'booked' | 'cancelled';
export type BookingStatus = 'pending' | 'confirmed' | 'rejected';

export interface Slot {
  id: string;
  starts_at: string;       // ISO timestamp
  ends_at: string;         // ISO timestamp
  status: SlotStatus;
  notes: string | null;
  created_at: string;
}

export interface Booking {
  id: string;
  slot_id: string;
  patient_name: string;
  patient_phone: string;
  patient_email: string | null;
  payment_method: 'instapay' | 'vodafone_cash';
  payment_reference: string | null;
  status: BookingStatus;
  admin_notes: string | null;
  created_at: string;
  slot?: Slot;
}
