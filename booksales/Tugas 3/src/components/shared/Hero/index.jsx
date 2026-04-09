export default function Hero(){
    return (
      <>
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
      </>
    );
}