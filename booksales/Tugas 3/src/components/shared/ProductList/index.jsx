export default function ProductList({ data }) {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Koleksi buku terbaik yang kami pilihkan khusus untuk Anda.
            </p>
          </div>
        </div>
      </section>

      <div id="books" className="album py-5 bg-body-tertiary">
        <div className="container">
          {/* Row container untuk kartu-kartu buku */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            
            
            {data && data.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  
                  <img 
                    src={book.image || "https://placehold.co/300x225"} 
                    alt={book.title}
                    className="bd-placeholder-img card-img-top"
                    style={{ height: "225px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">
                      Penulis: {book.author} <br />
                      Tahun: {book.year}
                    </p>
                    <p className="card-text">
                      {book.description}
                    </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                      <small className="text-body-secondary">{book.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}