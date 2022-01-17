import './single.css'

export default function Single() {
    return (
        <>
            <section className="singleWrapper">
                <div className="container-fluid">
                    <div className="add_img">
                        <img src="/images/shopcar.png" alt="add_image" className="amazon_add" />
                    </div>
                    <nav className="nav_breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active" ariaCurrent="page">Library</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single_image">
                                <img src="/images/chair-1.jpg" alt="single_image" className="single_img" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="single_content">
                                        <h4 className="single_product_detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea laboriosam, voluptate quia sunt numquam explicabo totam quasi incidunt quos dicta officiis repudiandae error temporibus, quae voluptates excepturi consequatur impedit.</h4>
                                        <p className="price">$ 14.40</p>
                                        <h5>Decription </h5>
                                        <p>this is new product</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="addCart_content">

                                        <p className="real_price">$ 205.25</p>
                                        <span className="delivery">Delivery January 19 - 28  </span>

                                        <span className="in_stock">In Stock</span>

                                        <select className="select_singl_qunty">
                                            <option> Qty: 1</option>
                                            <option>1</option>
                                            <option>1</option>
                                            <option>1</option>
                                            <option>1</option>
                                        </select>

                                        <button className="add_cart">Add to Cart</button>
                                        <button className="buy_cart">Buy Now</button>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
