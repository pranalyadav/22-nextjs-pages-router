// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Please make post request" });
  }

  const contactData = JSON.parse(req.body)

  const { error } = await supabase.from("contact").insert([contactData])

  if (error)
    res.status(500).json({ success: false, message: "could not send your message. Please try again" });

  //success message
  res.status(200).json({ success: true, message: "Thanks for your message! We will be in touch soon." });
}
