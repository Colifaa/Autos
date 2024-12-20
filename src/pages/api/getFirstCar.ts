import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';

type Car = {
  id: string;
  name: string;
  model: string;
  is_available: boolean;
  image_url?: string;
  created_at: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car | { error: string }>
) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .limit(1)
      .single();

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
