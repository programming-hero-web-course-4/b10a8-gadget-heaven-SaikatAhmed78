import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import products from '../../public/products.json';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (

        <div>
             <Helmet>
                <title>Statistics | Gadget Haven</title>
            </Helmet>
            <div className='bg-[#9538e2] h-[200px] py-6 rounded-lg container mx-auto'>
            <div className='max-w-7xl mx-auto px-4 text-white text-center'>
                <h2 className='mb-5 font-bold text-2xl text-white'>Product Statistics</h2>
                <p className='py-2 text-center'>This chart represents the statistical analysis of product prices across different categories. Here, you can compare prices to make informed decisions.!</p>
            </div>
            </div>

            <div className='flex flex-col items-center justify-center p-6 bg-gray-100 rounden-lg shadow-md'>
                <BarChart
                    width={1000}
                    height={500}
                    data={products}
                    margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );

};

export default Statistics;
