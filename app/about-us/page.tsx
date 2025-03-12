import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Award, MapPin, Calendar, Briefcase } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header and navigation are in layout.tsx */}

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="About Us Hero"
            width={1920}
            height={600}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <Badge className="mb-4 bg-white text-green-600 hover:bg-white/90">About Us</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Menghubungkan Jutaan Orang di Indonesia
                </h1>
                <p className="text-white/90 text-lg mb-6">
                  Kami membangun teknologi yang memberdayakan jutaan penjual dan konsumen untuk berpartisipasi dalam
                  ekonomi digital.
                </p>
                <Button className="bg-white text-green-600 hover:bg-white/90">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100M+", label: "Pengguna Aktif" },
                { number: "11M+", label: "Penjual" },
                { number: "500+", label: "Kota & Kabupaten" },
                { number: "42M+", label: "Produk" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-[#f3f4f5]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-100">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-6">Perjalanan Kami Membangun E-commerce Indonesia</h2>
                <p className="text-gray-600 mb-4">
                  Didirikan pada tahun 2009, Tokopedia lahir dari visi sederhana untuk mendorong pemerataan ekonomi
                  secara digital di Indonesia. Kami percaya bahwa teknologi dapat digunakan untuk memberdayakan
                  masyarakat dan menciptakan peluang bagi semua orang.
                </p>
                <p className="text-gray-600 mb-6">
                  Dari sebuah startup kecil, kami telah tumbuh menjadi salah satu perusahaan teknologi terbesar di
                  Indonesia yang terus berinovasi untuk memberikan layanan terbaik bagi jutaan pengguna kami.
                </p>
                <div className="space-y-3">
                  {[
                    "Mendorong pemerataan ekonomi secara digital",
                    "Memberdayakan UMKM di seluruh Indonesia",
                    "Menciptakan ekosistem digital yang inklusif",
                    "Menghadirkan solusi inovatif untuk kebutuhan sehari-hari",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-lg z-0"></div>
                <div className="relative z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Our Story"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-100">Mission & Vision</Badge>
              <h2 className="text-3xl font-bold mb-4">Misi dan Visi Kami</h2>
              <p className="text-gray-600">
                Kami berkomitmen untuk menciptakan dampak positif bagi masyarakat Indonesia melalui teknologi dan
                inovasi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-2 bg-green-500"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Misi</h3>
                  <p className="text-gray-600 mb-6">
                    Mencapai pemerataan ekonomi secara digital dengan memberdayakan jutaan penjual dan konsumen untuk
                    dapat berpartisipasi dalam ekonomi masa depan.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Memberdayakan UMKM di seluruh Indonesia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Menyediakan akses ke pasar yang lebih luas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Menciptakan peluang ekonomi baru</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-2 bg-green-500"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visi</h3>
                  <p className="text-gray-600 mb-6">
                    Membangun Indonesia yang lebih baik melalui teknologi dengan mendorong pemerataan ekonomi secara
                    digital.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Menjadi super-ecosystem terdepan di Indonesia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Mengintegrasikan layanan digital dalam satu platform</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Mendorong adopsi teknologi di seluruh Indonesia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-[#f3f4f5]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-100">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
              <p className="text-gray-600">
                Nilai-nilai ini menjadi panduan kami dalam mengambil keputusan dan membangun produk yang berdampak.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8 text-green-500" />,
                  title: "Fokus pada Pelanggan",
                  description: "Kami selalu mengutamakan kebutuhan pelanggan dalam setiap keputusan yang kami ambil.",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Integritas",
                  description: "Kami berkomitmen untuk selalu bertindak dengan kejujuran dan etika yang tinggi.",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                  title: "Inovasi",
                  description: "Kami terus berinovasi untuk menciptakan solusi yang lebih baik bagi pengguna kami.",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                  title: "Kolaborasi",
                  description: "Kami percaya bahwa kolaborasi adalah kunci untuk mencapai hasil yang luar biasa.",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  title: "Inklusivitas",
                  description: "Kami berkomitmen untuk menciptakan platform yang dapat diakses oleh semua orang.",
                },
                {
                  icon: (
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Keberlanjutan",
                  description: "Kami berkomitmen untuk membangun bisnis yang berkelanjutan dan berdampak positif.",
                },
              ].map((value, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-100">Our Journey</Badge>
              <h2 className="text-3xl font-bold mb-4">Perjalanan Kami</h2>
              <p className="text-gray-600">
                Melihat kembali perjalanan kami dari sebuah startup kecil hingga menjadi salah satu perusahaan teknologi
                terbesar di Indonesia.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: "2009",
                  title: "Awal Mula",
                  description:
                    "Tokopedia didirikan oleh William Tanuwijaya dan Leontinus Alpha Edison dengan visi untuk mendorong pemerataan ekonomi secara digital di Indonesia.",
                  icon: <Calendar className="h-6 w-6 text-white" />,
                },
                {
                  year: "2014",
                  title: "Ekspansi Layanan",
                  description:
                    "Tokopedia mulai memperluas layanannya dengan meluncurkan berbagai fitur baru seperti Tokopedia Saldo, sistem pembayaran digital yang memudahkan transaksi di platform.",
                  icon: <Award className="h-6 w-6 text-white" />,
                },
                {
                  year: "2017",
                  title: "Status Unicorn",
                  description:
                    "Tokopedia resmi menjadi unicorn setelah mendapatkan pendanaan sebesar $1,1 miliar yang dipimpin oleh Alibaba Group, menjadikannya salah satu startup dengan valuasi tertinggi di Indonesia.",
                  icon: <Award className="h-6 w-6 text-white" />,
                },
                {
                  year: "2020",
                  title: "Merger dengan Gojek",
                  description:
                    "Tokopedia dan Gojek mengumumkan merger untuk membentuk GoTo Group, menciptakan ekosistem digital terbesar di Indonesia yang menggabungkan e-commerce, pembayaran, pengiriman makanan, dan transportasi.",
                  icon: <Briefcase className="h-6 w-6 text-white" />,
                },
                {
                  year: "2023",
                  title: "Ekspansi Regional",
                  description:
                    "Tokopedia memperluas jangkauan layanannya ke berbagai negara di Asia Tenggara, memperkuat posisinya sebagai salah satu pemain e-commerce terbesar di kawasan ini.",
                  icon: <MapPin className="h-6 w-6 text-white" />,
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-10 pb-10">
                  {index !== 4 && <div className="absolute left-4 top-4 w-0.5 h-full bg-green-200"></div>}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 ml-2">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">{item.year}</Badge>
                      <h3 className="text-xl font-bold ml-2">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-[#f3f4f5]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-100">Our Team</Badge>
              <h2 className="text-3xl font-bold mb-4">Tim Kepemimpinan</h2>
              <p className="text-gray-600">Kenali para pemimpin yang mendorong inovasi dan pertumbuhan di Tokopedia.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Leader ${index + 1}`}
                      alt={`Leader ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-[250px] object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white">
                        <p className="text-sm">Lihat Profil</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold">Nama Pemimpin</h3>
                    <p className="text-sm text-gray-600">Jabatan</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Locations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-100">Contact Us</Badge>
                <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
                <p className="text-gray-600 mb-8">
                  Kami selalu terbuka untuk pertanyaan, saran, atau kolaborasi. Jangan ragu untuk menghubungi kami.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Alamat</h3>
                      <p className="text-gray-600">
                        Tokopedia Tower
                        <br />
                        Jl. Prof. DR. Satrio Kav. 11
                        <br />
                        Jakarta Selatan, 12950
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@tokopedia.com
                        <br />
                        careers@tokopedia.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telepon</h3>
                      <p className="text-gray-600">+62 21 1500 454</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Map"
                    alt="Office Location Map"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Bergabunglah dengan Kami</h2>
              <p className="text-white/90 text-lg mb-8">
                Jadilah bagian dari perjalanan kami dalam membangun masa depan digital Indonesia. Temukan peluang karir
                yang menantang dan bermakna di Tokopedia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                  Lihat Lowongan Kerja
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

