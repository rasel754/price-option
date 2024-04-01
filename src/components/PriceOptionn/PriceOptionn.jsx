import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOptionn = ({option}) => {
    const {name,features,price}=option;
    return (
        <div className='bg-blue-600 text-white flex flex-col p-6 rounded-2xl'>
            <h2 className='text-center'>
                <span className='text-7xl font-semibold'>${price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h1 className='text-3xl text-center my-4'>{name}</h1>
            <div className='flex-grow pl-8'>
            {
                features.map((feature,index) =><Feature key={index} feature={feature}></Feature> )
            }
            </div>
            <button className='mt-3 py-2 bg-green-500 hover:bg-green-800 w-full rounded-3xl'> Buy know</button>
        </div>
    );
};
PriceOptionn .propTypes={
    option:PropTypes.object
}

export default PriceOptionn;