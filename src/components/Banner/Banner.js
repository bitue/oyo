import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                <div>
                    <img className='rounded-3xl p-2' src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div>
                    <h2 className='py-3 px-2'>
                        In 2012, Ritesh Agarwal launched Oravel Stays to enable listing and booking of budget accommodations; he renamed the firm to OYO in 2013.[12] OYO partners with hotels to give similar guest experience across cities. Shortly after launching Oravel Stays, Ritesh Agarwal received a grant of $100,000 as part of the Thiel Fellowship, a two-year program from PayPal co-founder Peter Thiel.[13][14][15]

                        In 2019, OYO had over 17,000 employees globally,[16][17] of which approximately 8000 are in India and South Asia. OYO Hotels and Homes is a full-fledged hotel chain that leases and franchises assets. The company invests in capex,[18] hires general managers to oversee operations and customer experience, and generates around a million job opportunities in India[19] and South Asia alone. OYO set up 26 training institutes for hospitality enthusiasts across India in 2019.[20]

                        In April 2019, the company announced the launch of OPEN programme, an initiative for its partner hotels to help them reach their business goals. It further Introduced an upgraded Co-OYO app for hotel partners to provide complete visibility on all business and customer metrics
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default Banner;