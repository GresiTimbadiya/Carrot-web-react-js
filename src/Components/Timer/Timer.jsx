
const Timer = ({ timer }) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <img
                    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/deal/bg-deal.jpg"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100vh',         
                        objectFit: 'cover',      
                    }}
                />

                <div
                    className="deal-box-position"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '25%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {timer.map((val, index) => (
                        <div
                            key={index}
                            className="deal-box-content rounded p-4 shadow"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                                width: '500px',
                                maxWidth: '90%',
                            }}
                        >
                            <h5 className="fw-bold fs-3" style={{ color: '#64b496' }}>
                                {val.discount}
                            </h5>
                            <h3>{val.title}</h3>
                            <p className="text-secondary py-2" style={{ fontSize: '16px' }}>
                                {val.discription}
                            </p>
                            <div id="countdown">
                                <ul className="list-unstyled d-flex justify-content-between px-3">
                                    <li><span className="text-dark fw-bold" id="days"></span> days</li>
                                    <li><span className="text-dark fw-bold" id="hours"></span> Hours</li>
                                    <li><span className="text-dark fw-bold" id="minutes"></span> Minutes</li>
                                    <li><span className="text-dark fw-bold" id="seconds"></span> Seconds</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Timer
