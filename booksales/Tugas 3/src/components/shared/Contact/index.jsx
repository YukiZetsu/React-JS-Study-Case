export default function Contact(){
    return(
        <>
        <section id="contact" className="py-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 p-4 border rounded-4 shadow bg-white">
                <div className="row">
                  {/* Bagian Kiri: Info Kontak */}
                  <div className="col-md-5 bg-primary text-white p-4 rounded-3 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold mb-4">Hubungi Kami</h3>
                    <p className="mb-4">
                      Punya pertanyaan tentang stok buku atau ingin request
                      judul tertentu? Chat kami ya!
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-location-dot me-3"></i>
                      <span>Sidoarjo, Jawa Timur</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fa-solid fa-envelope me-3"></i>
                      <span>halo@mikobookstore.com</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-phone me-3"></i>
                      <span>+62 812-3456-7890</span>
                    </div>
                  </div>

                  {/* Bagian Kanan: Form Input */}
                  <div className="col-md-7 p-4">
                    <form>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Siapa namamu?"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Email Aktif
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="nama@email.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Pesan Kamu
                        </label>
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Tulis pesan atau request buku di sini..."
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary w-100 fw-bold py-2"
                      >
                        Kirim Pesan Sekarang
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}