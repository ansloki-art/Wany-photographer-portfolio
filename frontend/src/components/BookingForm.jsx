import { useState } from "react";
import { BULAN } from "../utils/dateUtils";

const NOMOR_WA = "+6282267451998";

const PAKET = [
  "Nikah + Prewedding",
  "Wedding",
  "Engagement",
  "Aqiqah",
  "Wisuda",
  "Lainnya",
];

function prettyDate(key) {
  if (!key) return "";
  const [y, m, d] = key.split("-");
  return `${parseInt(d)} ${BULAN[parseInt(m) - 1]} ${y}`;
}

export default function BookingForm({ tanggal, setTanggal, paket, setPaket }) {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [catatan, setCatatan] = useState("");
  const [error, setError] = useState("");

  const inputClass =
    "w-full px-3 py-2.5 rounded-lg bg-stone-800/60 border border-stone-700/60 outline-none text-sm text-stone-50 placeholder:text-stone-600 focus:border-[#C9A84C]/50 focus:bg-stone-800 transition-all duration-150";

  function kirim() {
    if (!nama.trim() || !wa.trim() || !paket || !tanggal) {
      setError("Mohon isi semua field yang wajib (*).");
      return;
    }
    setError("");

    const pesan =
      `Halo Bg Wany, saya mau booking:\n\n` +
      `Nama: ${nama}\n` +
      `No. WA: ${wa}\n` +
      `Paket: ${paket}\n` +
      `Tanggal acara: ${prettyDate(tanggal)}\n` +
      (catatan.trim() ? `Catatan: ${catatan}\n` : "");

    const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="w-full bg-stone-900 border border-stone-800 text-stone-50 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-stone-50 mb-0.5">Booking Sesi</h3>
      <p className="text-xs text-stone-600 mb-5">Isi form lalu lanjut konfirmasi via WhatsApp.</p>

      {tanggal ? (
        <div className="mb-5 px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-500 mb-0.5">Tanggal dipilih</p>
            <p className="text-sm font-medium text-stone-50">{prettyDate(tanggal)}</p>
          </div>
          <button onClick={() => setTanggal("")} className="text-stone-600 hover:text-stone-300 transition-colors text-base leading-none" title="Ganti tanggal">✕</button>
        </div>
      ) : (
        <div className="mb-5 px-4 py-3 rounded-xl border border-dashed border-stone-700/60 text-xs text-stone-600">
          ← Klik tanggal kosong di kalender
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-xs text-stone-500 mb-1.5">Nama *</label>
          <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama kamu" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-stone-500 mb-1.5">WhatsApp *</label>
          <input value={wa} onChange={(e) => setWa(e.target.value)} placeholder="08xxxxxxxxxx" inputMode="numeric" className={inputClass} />
        </div>
      </div>

      <label className="block text-xs text-stone-500 mb-1.5">Paket *</label>
      <select value={paket} onChange={(e) => setPaket(e.target.value)} className={inputClass + " mb-3"}>
        <option value="">-- Pilih Paket --</option>
        {PAKET.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>

      <label className="block text-xs text-stone-500 mb-1.5">Catatan <span className="text-stone-700">(opsional)</span></label>
      <textarea value={catatan} onChange={(e) => setCatatan(e.target.value)} rows={3} placeholder="Detail acara, lokasi, jam, dll..." className={inputClass + " mb-4 resize-none"} />

      {error && <p className="text-red-400 text-xs mb-3 flex items-center gap-1.5"><span>⚠</span> {error}</p>}

      <button
        onClick={kirim}
        className="w-full py-3 rounded-xl bg-[#C9A84C] text-stone-950 font-semibold text-sm tracking-wide transition-opacity hover:opacity-80"
      >
        Pesan via WhatsApp
      </button>
    </div>
  );
}