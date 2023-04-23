import React from 'react'

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const fullDate = `${day}-${month}-${year}`;
export const Navbar = () => {
    return (
        <header className="p-3 mb-3 border-bottom">
            {/* <div class="container">
                <div id="barraNavegacion" class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start"> */}
                    <div id="NombreApp">
                        <h1 >TaskApp</h1>
                    </div>
                    {/* <div>
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                        </form>
                    </div> */}
                    <div class="fechaNav">
                        <h2>Fecha</h2>
                        <h3>{fullDate}</h3>
                    </div>

                {/* </div>
            </div> */}
        </header>
    )
}
