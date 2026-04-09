export default function Team() {
  return (
    <>
      <section id="team" className="py-5 bg-light rounded-3 my-5 shadow-sm">
        <div className="container">
          <div className="row mb-4 text-center">
            <div className="col-lg-12">
              <h2 className="fw-bold">Meet Our Creative Team</h2>
              <p className="text-muted">
                Orang-orang hebat di balik koleksi buku terbaik MikoBookstore.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Team Member 1 - Didik */}
            <div className="col-md-4 text-center">
              <div className="card h-100 border-0 shadow-sm p-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ga7WS4lW6RUg5YO7YF3mtBlD85PiA_SK0A&s"
                  className="rounded-circle mx-auto mb-3 border border-3 border-primary"
                  alt="Didik Sujatmiko"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Didik Sujatmiko</h5>
                  <p className="card-text text-primary fw-semibold">
                    Founder & Developer
                  </p>
                  <p className="small text-muted fst-italic">
                    "Buku adalah pelarian terbaik dari dunia yang bising."
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Kintama */}
            <div className="col-md-4 text-center">
              <div className="card h-100 border-0 shadow-sm p-3">
                <img
                  src="https://i.pinimg.com/originals/51/c3/cf/51c3cf20d441c3370426ce6d17b447c0.png"
                  className="rounded-circle mx-auto mb-3 border border-3 border-info"
                  alt="Kintama"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Kintama</h5>
                  <p className="card-text text-primary fw-semibold">
                    Chief Editor
                  </p>
                  <p className="small text-muted fst-italic">
                    "Memastikan setiap kata memberikan makna bagi pembaca."
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 - Leon */}
            <div className="col-md-4 text-center">
              <div className="card h-100 border-0 shadow-sm p-3">
                <img
                  src="https://img.freepik.com/foto-premium/leon-s-kennedy-resident-evil-yang-kuat-terisolasi-dengan-latar-belakang-putih_787273-11603.jpg"
                  className="rounded-circle mx-auto mb-3 border border-3 border-warning"
                  alt="Leon S Kurniawan"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Leon S Kurniawan</h5>
                  <p className="card-text text-primary fw-semibold">
                    Marketing Lead
                  </p>
                  <p className="small text-muted fst-italic">
                    "Mendekatkan buku berkualitas ke tangan Anda."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
