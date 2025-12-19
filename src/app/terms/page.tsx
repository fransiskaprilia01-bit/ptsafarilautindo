import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Syarat & Ketentuan <span className="text-blue-200">PT SAFARI LAUT INDO</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            Ketentuan penggunaan layanan wisata tirta untuk memastikan pengalaman yang aman dan menyenangkan bagi semua pelanggan.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">1. Reservasi</h3>
              <p>Pemesanan dapat dilakukan minimal 3 hari sebelum tanggal keberangkatan untuk paket reguler dan 7 hari untuk paket custom.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">2. Pembayaran</h3>
              <p>DP sebesar 50% harus dibayar saat pemesanan. Pelunasan dilakukan H-1 sebelum keberangkatan.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3. Konfirmasi</h3>
              <p>Pemesanan dikonfirmasi setelah pembayaran diterima. Anda akan menerima e-ticket dan detail itinerary.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Kebijakan Pembatalan</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Pembatalan oleh Pelanggan:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>H-7 keberangkatan: Pengembalian 50% dari total pembayaran</li>
                <li>H-3 keberangkatan: Pengembalian 25% dari total pembayaran</li>
                <li>H-1 keberangkatan: Tidak ada pengembalian</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Pembatalan oleh PT SAFARI LAUT INDO:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Jika cuaca buruk: Reschedule atau full refund</li>
                <li>Jika minimum kuota tidak terpenuhi: Reschedule atau full refund</li>
                <li>Force majeure: Reschedule sesuai kesepakatan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pelanggan</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Persyaratan:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wajib membawa identitas diri (KITAS/KTP/Paspor)</li>
                <li>Dalam kondisi sehat dan fit untuk wisata bahari</li>
                <li>Mengikuti instruksi tour guide dan kapten kapal</li>
                <li>Menjaga kebersihan lingkungan selama trip</li>
                <li>Mematuhi peraturan keselamatan yang berlaku</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Layanan Termasuk</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">✓ Termasuk:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Transportasi kapal PP</li>
                <li>• Makan siang sesuai paket</li>
                <li>• Air mineral</li>
                <li>• Peralatan snorkeling</li>
                <li>• Tour guide profesional</li>
                <li>• Asuransi perjalanan</li>
                <li>• Entrance fee objek wisata</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">✗ Tidak Termasuk:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Transportasi dari/ke meeting point</li>
                <li>• Pengeluaran pribadi</li>
                <li>• Tip untuk guide dan crew</li>
                <li>• Dokumentasi underwater (opsional)</li>
                <li>• Obat-obatan pribadi</li>
                <li>• Makan di luar program</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Force Majeure:</strong></p>
              <p>PT SAFARI LAUT INDO tidak bertanggung jawab atas pembatalan atau perubahan jadwal akibat kondisi di luar kendali kami (cuaca ekstrem, bencana alam, perintah pihak berwenang, dll).</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Kesehatan dan Keselamatan:</strong></p>
              <p>Setiap peserta bertanggung jawab atas kondisi kesehatannya sendiri. Kami menyarankan untuk memiliki asuransi perjalanan pribadi.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Barang Pribadi:</strong></p>
              <p>PT SAFARI LAUT INDO tidak bertanggung jawab atas kehilangan atau kerusakan barang pribadi selama perjalanan.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
          <p className="text-gray-700 mb-6">
            Untuk informasi lebih lanjut mengenai syarat dan ketentuan, silakan hubungi:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SLI</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">PT SAFARI LAUT INDO</p>
                <p className="text-gray-600">JL. KERUING NO. 9 KOMPLEK DANGAU TEDUH</p>
                <p className="text-gray-600">Piai Tangah, Pauh, Padang, Sumatera Barat</p>
              </div>
            </div>
            <div className="ml-13 space-y-1">
              <p className="text-gray-700">📞 085285704297</p>
              <p className="text-gray-700">✉️ info@safarilautindo.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 text-center">
          <p className="text-gray-600 mb-4">
            Syarat dan ketentuan ini berlaku efektif sejak Januari 2024.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Dengan melakukan pemesanan, Anda menyatakan telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang berlaku.
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SLI</span>
              </div>
              <span className="font-bold">
                PT <span className="text-blue-400">SAFARI</span> <span className="text-cyan-400">LAUT</span> INDO
              </span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 PT SAFARI LAUT INDO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}