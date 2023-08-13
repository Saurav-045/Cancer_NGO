import React from 'react';
import g1 from "./Assets/gallery1.jpg";
import g2 from "./Assets/gallery2.jpg";
import g3 from "./Assets/gallery3.jpg";

export default function Gallery() {
  return (
    <div>
      <div class="lightbox p-5">
      <div className="container fs-1 container-fluid d-flex justify-content-center font-weight-bold mb-5 carouselmaintext">
        Gallery
      </div>
        <div class="row">
        <div class="col-lg-6 p-3">
            <img
            src={g1}
            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
            alt="Cancer"
            class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
            />
            <img
            src={g2}
            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
            alt="Cancer"
            class="w-100 shadow-1-strong rounded"
            />
        </div>
        <div class="col-lg-6">
            <img
            src={g3}
            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
            alt="Cancer"
            class="w-100 shadow-1-strong rounded"
            />
        </div>
        </div>
      </div>
    </div>
  );
}
