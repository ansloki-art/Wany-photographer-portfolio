import { useState } from "react";
import BookingCalendar from "./BookingCalendar";
import BookingForm from "./BookingForm";

export default function Schedule({ paket, setPaket }) {
  const [tanggal, setTanggal] = useState("");

  return (
    <section id="schedule" className="bg-stone-950 py-24 scroll-mt-24 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6 text-[#C9A84C]">
          Jadwal
        </p>
        <h2 className="font-serif text-4xl font-bold text-stone-100 mb-4">
          Cek Ketersediaan & Booking
        </h2>
        <p className="text-stone-400 text-sm max-w-md mb-10">
          Klik tanggal kosong di kalender untuk booking sesi.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          <BookingCalendar selectedDate={tanggal} onSelectDate={setTanggal} />
          <BookingForm tanggal={tanggal} setTanggal={setTanggal} paket={paket} setPaket={setPaket} />
        </div>

      </div>
    </section>
  );
}