import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Kebijakan Privasi <span className="text-cyan-200">PT SAFARI LAUT INDO</span>
          </h1>
          <p className="text-cyan-100 text-lg max-w-3xl">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda dalam setiap interaksi dengan layanan wisata tirta kami.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="w-6 h-6 text-cyan-600" />
            <h2 className="text-2xl font-bold text-gray-900">Pengumpulan Informasi</h2>
          </div>
          <div className="prose prose-cyan max-w-none">
            <p className="text-gray-700 mb-4">
              PT SAFARI LAUT INDO mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menggunakan layanan kami, termasuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Nama lengkap dan informasi kontak (nomor telepon, email)</li>
              <li>Alamat lengkap untuk keperluan penjemputan</li>
              <li>Informasi pembayaran dan transaksi</li>
              <li>Preferensi wisata dan kebutuhan khusus</li>
              <li>Informasi paspor atau identitas untuk keperluan administrasi</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="w-6 h-6 text-cyan-600" />
            <h2 className="text-2xl font-bold text-gray-900">Penggunaan Informasi</h2>
          </div>
          <div className="prose prose-cyan max-w-none">
            <p className="text-gray-700 mb-4">
              Informasi yang kami kumpulkan digunakan untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Memproses pemesanan dan reservasi layanan wisata</li>
              <li>Memberikan informasi terkait layanan dan paket wisata</li>
              <li>Menghubungi Anda untuk konfirmasi dan koordinasi trip</li>
              <li>Meningkatkan kualitas layanan dan pengalaman pelanggan</li>
              <li>Keperluan administratif dan kepatuhan regulasi</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-cyan-600" />
            <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
          </div>
          <div className="prose prose-cyan max-w-none">
            <p className="text-gray-700 mb-4">
              PT SAFARI LAUT INDO melindungi data pribadi Anda dengan:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Enkripsi data transmisi dan penyimpanan</li>
              <li>Akses terbatas untuk otorisasi personil</li>
              <li>Sistem keamanan berlapis untuk mencegah akses tidak sah</li>
              <li>Backup data rutin untuk mencegah kehilangan informasi</li>
              <li>Pembaruan keamanan sistem secara berkala</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <UserCheck className="w-6 h-6 text-cyan-600" />
            <h2 className="text-2xl font-bold text-gray-900">Hak Privasi Anda</h2>
          </div>
          <div className="prose prose-cyan max-w-none">
            <p className="text-gray-700 mb-4">
              Sebagai pelanggan, Anda memiliki hak untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Mengakses dan melihat data pribadi yang kami simpan</li>
              <li>Memperbarui atau mengoreksi data yang tidak akurat</li>
              <li>Menghapus data pribadi sesuai dengan ketentuan yang berlaku</li>
              <li>Menolak pemasaran komunikasi dari kami</li>
              <li>Meminta salinan data pribadi Anda</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
          <p className="text-gray-700 mb-6">
            Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan privasi kami, silakan hubungi:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
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
            Kebijakan privasi ini berlaku efektif sejak Januari 2024 dan dapat diperbarui sesuai kebutuhan.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Dengan menggunakan layanan PT SAFARI LAUT INDO, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
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
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SLI</span>
              </div>
              <span className="font-bold">
                PT <span className="text-cyan-400">SAFARI</span> <span className="text-blue-400">LAUT</span> INDO
              </span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Beranda</Link>
              <Link href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
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