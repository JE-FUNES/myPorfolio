import React from 'react'

const Cta = () => {
    return (
        <React.Fragment>
            {/*----- Start Cta -----*/}
            <section className="mt-0 mb-5 py-6 bg-purple-950" id='Cta'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5 items-center">
                        <div className="col-span-12 lg:col-span-8 md:col-span-7 text-center md:text-left">
                            <h4 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">Intrested working with me?</h4>
                        </div>
                        <div className="col-span-12 lg:col-span-4 md:col-span-5 text-center">
                            <a href='#Contact' className="btn btn-yellow">Contact me Now!</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- End Cta -----*/}
        </React.Fragment>
    )
}

export default Cta
