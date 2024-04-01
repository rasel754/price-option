import PropTypes from 'prop-types';
import { IoCheckbox } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'> <IoCheckbox className='text-green-600 mr-2'></IoCheckbox> {feature}</p>
        </div>
    );
};
Feature .propTypes={
    feature:PropTypes.string
}

export default Feature;