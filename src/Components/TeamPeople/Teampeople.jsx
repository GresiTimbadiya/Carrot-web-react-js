
const Teampeople = ({ teamPeople }) => {
    return (
        <>
            <div className='container my-5 text-center'>
                <h2 className='fw-bold fs-2 mb-3' style={{ marginTop: '70px' }}>Great Words From People</h2>
                <p className='col-11 col-md-8 col-lg-6 mx-auto text-secondary' style={{ fontSize: '17px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore lacus vel facilisis. </p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {teamPeople.map((val, i) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-4 d-flex justify-content-center" key={i}>
                            <div className="cr-testimonial text-center">
                                <div className="cr-testimonial-image d-flex justify-content-center">
                                    <img src={val.img} className="rounded-circle" alt="" />
                                </div>
                                <div className="cr-testimonial-inner">
                                    <span className="text-secondary">{val.Role}</span>
                                    <h4 className="title fw-bold">{val.name}</h4>
                                    <p className="text-secondary px-4">"{val.discription}"</p>
                                    <img src={val.star} className="mt-2" width={100} alt="rating stars" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Teampeople