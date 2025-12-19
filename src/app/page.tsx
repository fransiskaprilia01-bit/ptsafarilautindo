'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Waves, Ship, Anchor, Navigation, Star, Users, Calendar, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitMessage(`❌ ${result.error || 'Terjadi kesalahan. Silakan coba lagi.'}`);
      }
    } catch (error) {
      setSubmitMessage('❌ Terjadi kesalahan jaringan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="PT SAFARI LAUT INDO Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                PT <span className="text-cyan-600">SAFARI</span> <span className="text-blue-600">LAUT</span> INDO
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-cyan-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-cyan-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-cyan-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors">Kontak</a>
              <Link href="/privacy" className="text-gray-700 hover:text-cyan-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-cyan-600 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 z-10"></div>
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <Image 
              src="/logo.png" 
              alt="PT SAFARI LAUT INDO Logo" 
              width={120} 
              height={120} 
              className="rounded-full mx-auto mb-6 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            PT <span className="text-cyan-600">SAFARI</span> <span className="text-blue-600">LAUT</span> INDO
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-700 font-semibold mb-4">
            Petualangan Wisata Tirta Terbaik di Sumatera Barat
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Nikmati pengalaman wisata bahari yang tak terlupakan dengan pelayanan profesional dan fasilitas lengkap. 
            Jelajahi keindahan laut Padang dan sekitarnya bersama kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-3 text-lg">
              <Waves className="w-5 h-5 mr-2" />
              Lihat Paket
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-cyan-600">500+</div>
              <div className="text-gray-700">Pelanggan Puas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-700">Paket Wisata</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-cyan-600">5+</div>
              <div className="text-gray-700">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-cyan-600">SAFARI LAUT INDO</span>?
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                PT SAFARI LAUT INDO adalah perusahaan profesional yang bergerak di bidang wisata tirta. 
                Kami berkomitmen untuk memberikan pengalaman wisata bahari yang aman, nyaman, dan tak terlupakan 
                bagi seluruh pelanggan kami.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pelayanan Profesional</h4>
                    <p className="text-gray-600">Tim berpengalaman yang siap melayani kebutuhan wisata Anda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fasilitas Lengkap</h4>
                    <p className="text-gray-600">Peralatan modern dan kapal yang terawat dengan baik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lokasi Strategis</h4>
                    <p className="text-gray-600">Mudah diakses dari berbagai penjuru kota Padang</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
                <CardContent className="p-6 text-center">
                  <Anchor className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Wisata Pulau</h4>
                  <p className="text-gray-600 text-sm">Jelajahi pulau-pulau indah di sekitar Padang</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Snorkeling</h4>
                  <p className="text-gray-600 text-sm">Nikmati keindahan bawah laut yang memukau</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
                <CardContent className="p-6 text-center">
                  <Ship className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Rent Boat</h4>
                  <p className="text-gray-600 text-sm">Sewa kapal untuk berbagai keperluan</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Group Tour</h4>
                  <p className="text-gray-600 text-sm">Paket wisata untuk rombongan besar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Berbagai pilihan paket wisata tirta yang dapat disesuaikan dengan kebutuhan Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paket Hemat</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-4">Rp 350K<span className="text-base text-gray-600">/orang</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mr-2" />
                    Wisata pulau 3 destinasi
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mr-2" />
                    Include snorkeling gear
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mr-2" />
                    Makan siang
                  </li>
                </ul>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Pilih Paket</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                POPULER
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Paket Premium</h3>
                <div className="text-3xl font-bold mb-4">Rp 650K<span className="text-base opacity-90">/orang</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Wisata pulau 5 destinasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Full snorkeling equipment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Makan siang + snack
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Dokumentasi underwater
                  </li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Pilih Paket</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Group Package</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                    Minimal 15 orang
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                    Custom destination
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                    Private boat
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                    Tour guide included
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Hubungi Kami</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">
              Siap memulai petualangan wisata tirta Anda? Hubungi kami sekarang!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-700">
                        JL. KERUING NO. 9 KOMPLEK DANGAU TEDUH<br />
                        Desa/Kelurahan Piai Tangah, Kec. Pauh<br />
                        Kota Padang, Provinsi Sumatera Barat
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-700">085285704297</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">info@safarilautindo.com</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon (Opsional)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-sm ${submitMessage.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="PT SAFARI LAUT INDO Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                />
                <span className="font-bold text-xl">
                  PT <span className="text-cyan-400">SAFARI</span> <span className="text-blue-400">LAUT</span> INDO
                </span>
              </div>
              <p className="text-gray-300">
                Mitra terpercaya untuk petualangan wisata tirta terbaik di Sumatera Barat.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Layanan</a></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>085285704297</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@safarilautindo.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Padang, Sumatera Barat</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 PT SAFARI LAUT INDO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}