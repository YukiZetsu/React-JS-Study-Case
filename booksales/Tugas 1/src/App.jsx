function App() {
  return (
    <>
      <div className="container">
        {/* Header */}{" "}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          {" "}
          <div className="col-md-3 mb-2 mb-md-0">
            {" "}
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "rgb(116, 192, 252)" }}
              ></i>
              <span className="ms-2 fs-4 fw-bold">MikoBookStore</span>
            </a>{" "}
          </div>{" "}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {" "}
            <li>
              <a href="#home" className="nav-link px-2">
                Home
              </a>
            </li>{" "}
            <li>
              <a href="#books" className="nav-link px-2">
                Book
              </a>
            </li>{" "}
            <li>
              <a href="#team" className="nav-link px-2">
                Team
              </a>
            </li>{" "}
            <li>
              <a href="#contact" className="nav-link px-2">
                Contact
              </a>
            </li>{" "}
          </ul>{" "}
          <div className="col-md-3 text-end">
            {" "}
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>{" "}
            <button type="button" className="btn btn-primary">
              Register
            </button>{" "}
          </div>{" "}
        </header>{" "}
        {/* Hero */}
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          {" "}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            {" "}
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Jendela Dunia di Genggamanmu
            </h1>{" "}
            <p className="lead">
              Temukan koleksi buku terlengkap dari berbagai genre. Mulai dari
              pengembangan diri, teknologi, hingga fiksi favoritmu dengan harga
              terbaik.
            </p>{" "}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              {" "}
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>{" "}
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            {" "}
            <img
              className="rounded-lg-3"
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000"
              alt=""
              width="720"
            />{" "}
          </div>{" "}
        </div>
        {/* Produk List */}
        <section className="py-5 text-center container">
          {" "}
          <div className="row py-lg-5">
            {" "}
            <div className="col-lg-6 col-md-8 mx-auto">
              {" "}
              <h1 className="fw-light">Best Seller</h1>{" "}
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>{" "}
              <p>
                {" "}
                <a href="#" className="btn btn-primary my-2 m-2">
                  Views
                </a>{" "}
                <a href="#" className="btn btn-secondary my-2">
                  Other Book
                </a>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <div id="books" className="album py-5 bg-body-tertiary">
          {" "}
          <div className="container">
            {" "}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Team */}
        {/* --- SECTION TEAM (Langkah 2) --- */}
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
              {/* Team Member 1 */}
              <div className="col-md-4 text-center">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ga7WS4lW6RUg5YO7YF3mtBlD85PiA_SK0A&s"
                    className="rounded-circle mx-auto mb-3 border border-3 border-primary"
                    alt="Miko"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Didik Sujatmiko</h5>
                    <p className="card-text text-primary fw-semibold">
                      Founder & Developer
                    </p>
                    <p className="small text-muted text-italic">
                      "Buku adalah pelarian terbaik dari dunia yang bising."
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="col-md-4 text-center">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <img
                    src="https://i.pinimg.com/originals/51/c3/cf/51c3cf20d441c3370426ce6d17b447c0.png"
                    className="rounded-circle mx-auto mb-3 border border-3 border-info"
                    alt="Team"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Kintama</h5>
                    <p className="card-text text-primary fw-semibold">
                      Chief Editor
                    </p>
                    <p className="small text-muted">
                      "Memastikan setiap kata memberikan makna bagi pembaca."
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="col-md-4 text-center">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <img
                    src="https://img.freepik.com/foto-premium/leon-s-kennedy-resident-evil-yang-kuat-terisolasi-dengan-latar-belakang-putih_787273-11603.jpg"
                    className="rounded-circle mx-auto mb-3 border border-3 border-warning"
                    alt="Team"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Leon S Kurniawan</h5>
                    <p className="card-text text-primary fw-semibold">
                      Marketing Lead
                    </p>
                    <p className="small text-muted">
                      "Mendekatkan buku berkualitas ke tangan Anda."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        {/* --- SECTION CONTACT (Langkah 3) --- */}
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
        {/* Footer */}
        <footer className="py-3 my-4">
          {" "}
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>{" "}
          </ul>{" "}
          <p className="text-center text-body-secondary">
            © 2025 NF Academy
          </p>{" "}
        </footer>
      </div>
    </>
  );
}

export default App;
